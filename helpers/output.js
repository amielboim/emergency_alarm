/**
 * Created by amiel on 9/4/17.
 */

module.exports.output = function (data,status) {

    if(typeof status == undefined)status = 0;
    return {status:status,data:data}
}


module.exports.output2 = function (data,status) {

    if(typeof status == undefined)status = 0;
    return {status:status,data:data}
}

