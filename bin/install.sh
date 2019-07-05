#/bin/bash

if [[ $# -ge 1 ]]
then
    defaultAppName="TypescriptReactNative"
    defaultPackageName="typescript-react-native"
    projectName="$1"
    sed -i "" "s/${defaultAppName}/${projectName}/g" app.json
    sed -i "" "s/${defaultPackageName}/${projectName}/g" package.json
    rm -rf ios android
    yarn
    react-native eject
    react-native link
    rm -rf .git
    echo -e "\033[33m> [ Remember to change the Codecov token in package.json > scripts > codecov ] \033[0m"
else
    echo USAGE
    echo "	$0 <ProjectName>"
fi
