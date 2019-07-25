#/bin/bash
YUM_CMD=$(which yum)
APT_GET_CMD=$(which apt-get)
BREW_CMD=$(which brew)
if [[ $# -ge 1 ]]
then
    projectName="$1"
    yarn
    yarn rename $projectName
    yarn jetify
    cd ios && pod install
    rm -rf .git
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
    echo -e "\033[33m> [ Remember to change the Codecov token in package.json > scripts > codecov ] \033[0m"
else
    echo USAGE
    echo "	$0 <ProjectName>"
fi
