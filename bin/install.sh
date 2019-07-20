#/bin/bash

if [[ $# -ge 1 ]]
then
    projectName="$1"
    yarn
    yarn rename $projectName
    yarn jetify
    cd ios && pod install
    rm -rf .git
    echo -e "\033[33m> [ Remember to change the Codecov token in package.json > scripts > codecov ] \033[0m"
else
    echo USAGE
    echo "	$0 <ProjectName>"
fi
