#!/usr/bin/env bash

# start constants definition
dryRun=false
# end constants definition


# start functions definition
echo "Installing node modules"
echo "Current working directory: $(pwd)"


systemOperation (){

    command=$1

    if [ "$dryRun" = true ] ; then
        echo "Dry run: $command"
    else
        echo "Executing: $command"
        eval $command
    fi

}

install_node_modules () {
    echo "Installing node modules"

    systemOperation "npm install --legacy-peer-deps --max-old-space-size=4024"
}

skip_node_modules () {
    echo "Skipping npm install"
}

node_modules_installation () {

    echo "Do you want to install node modules?"
    select installConfirm in "Yes" "No"; do
    
    if [ -z $installConfirm ]; then
        echo "Invalid option $REPLY"
        continue
    fi 
 

    case $installConfirm in
        "Yes" )  install_node_modules && break;;
        "No" ) skip_node_modules && break;;
    esac
 

    break
done
}

# end functions definition




node_modules_installation

echo "Done installing dependencies"
