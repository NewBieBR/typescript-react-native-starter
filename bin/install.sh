#/bin/bash
YUM_CMD=$(which yum)
APT_GET_CMD=$(which apt-get)
BREW_CMD=$(which brew)
IMAGEMAGICK_CMD=$(which imagemagick)
sed -i '' 's/yarn codecov/yarn test/g' package.json
if [[ $# -ge 1 ]]
then
    projectName="$1"
    rm -rf .git CODE_OF_CONDUCT.md CONTRIBUTING.md LICENSE README.md
    yarn
    yarn rename $projectName
    yarn jetify
    cd ios && rm -rf Pods && pod install
    if [[ ! -z $IMAGEMAGICK_CMD ]]; then
        if [[ ! -z $YUM_CMD ]]; then
            sudo yum install imagemagick
            elif [[ ! -z $APT_GET_CMD ]]; then
            sudo apt-get install imagemagick
            elif [[ ! -z $BREW_CMD ]]; then
            brew install imagemagick
        else
            echo "Can't install package imagemagick, you should install it yourself in order to use the app-icon generator"
            exit 1;
        fi
    fi
    echo -e "\033[33m> [ If you want to use Codecov, remember to change the Codecov token in package.json > scripts > codecov ] \033[0m"
else
    echo USAGE
    echo "	$0 <ProjectName>"
fi
