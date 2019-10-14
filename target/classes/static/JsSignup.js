function signup(_CompanyName,_EthAddress,_InviteCode,_CompanyTpye,callback)
{
    //转化后的数据中带“” 做切割处理
    var CompanyName = _CompanyName.slice(1,(_CompanyName.length-1));
    var EthAddress = _EthAddress.slice(1,(_EthAddress.length-1));
    var InviteCode = _InviteCode.slice(1,(_InviteCode.length-1));
    var CompanyType = _CompanyTpye.slice(1,(_CompanyTpye.length-1));

    //post数据构成
    var signInfo = {"CompanyName":CompanyName,"EthAddress":EthAddress,"InviteCode":InviteCode,
                    "CompanyType":CompanyType};
    $.ajax({
        type: 'POST',
        url: "/signup",
        dataType: "json",
        data: JSON.stringify(signInfo),
        contentType: "application/json",
        success: function (R) {
            var resultbad =JSON.stringify(R.Result);
            console.log(resultbad);
            var result = resultbad.slice(1,(resultbad.length-1));

            if(result=="Error")
            {
                callback("Error invite code");
            }
            else
            {
                callback("success");
            }

        },
        error: function () {
            console.log("error");
        }
    });

}