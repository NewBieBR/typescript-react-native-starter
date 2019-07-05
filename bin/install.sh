#/bin/bash

if [[ $# -ge 1 ]]
then
    defaultAppName="TypescriptReactNativeStarter"
    defaultPackageName="typescript-react-native-starter"
    projectName="$1"
    yarn
    yarn run rename $projectName
    sed -i "" "s/${defaultAppName}/${projectName}/g" app.json
    sed -i "" "s/${defaultPackageName}/${projectName}/g" package.json
    rm -rf .git
    echo -e "\033[33m> [ Remember to change the Codecov token in package.json > scripts > codecov ] \033[0m"
else
    echo USAGE
    echo "	$0 <ProjectName>"
fi
