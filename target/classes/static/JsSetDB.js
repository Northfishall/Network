
function setDBP(dataIndex,dataProductName,
    dataOriginal,dataProduceDate,
    dataSaveTime,
    dataCompanyName,dataTel,
    dataLocation)
{
    setDataP(dataIndex,dataProductName,
        dataOriginal,dataProduceDate,
        dataSaveTime,
        dataCompanyName,dataTel,
        dataLocation,function (tx)
        {
            if(tx=="deny")
            {
                console.log("license deny");
            }
            else
            {
                var web3 = initweb3();
                web3.eth.getAccounts(function (error,r)
                {
                    if (!error)
                    {
                        var address = r[0];
                        //var OIndex = JSON.stringify(data.field.dataIndex);
                        var Jindex = dataIndex.slice(1,(dataIndex.length-1));
                        var Tx = {"Tx":tx,"Index":Jindex,"From":address};
                        console.log("TxPost"+Tx.Tx);
                        $.ajax({
                            type: 'POST',
                            url: "/SetTxP",
                            dataType: "json",
                            data: JSON.stringify(Tx),
                            contentType : "application/json",
                            success: function(R) {
                                console.log("success save")
                            },
                            error: function() {
                                console.log("error");
                            }
                        });
                    }
                    else
                    {
                        console.log(error);
                    }
                });
            }
        });
}

function setDBT(dataIndex,dataCompany,
    dataLocation,dataDateIn,
    dataDateOut,dataProduceName,dataOther)
{
    console.log(dataOther);
    setDataT(dataIndex,dataCompany,
        dataLocation,dataDateIn,
        dataDateOut,dataProduceName,dataOther,
        function (tx)
        {
            if(tx=="deny")
            {   ///权限拒绝
                console.log("license deny");
            }
            else
            {//权限通过成功提交交易 记录交易收据
                var web3 = initweb3();
                web3.eth.getAccounts(function (error,r)
                {
                    if (!error)
                    {
                        var address = r[0];
                        //var OIndex = JSON.stringify(data.field.dataIndex);
                        var Jindex = dataIndex.slice(1,(dataIndex.length-1));
                        var Tx = {"Tx":tx,"Index":Jindex,"From":address};
                        console.log("TxPost"+Tx.Tx);
                        $.ajax({
                            type: 'POST',
                            url: "/SetTxT",
                            dataType: "json",
                            data: JSON.stringify(Tx),
                            contentType : "application/json",
                            success: function(R) {
                                console.log("success save")
                            },
                            error: function() {
                                console.log("error");
                            }
                        });
                    }
                    else
                    {
                        console.log(error);
                    }
                });
            }
        });
}


function setDBF(dataIndex,dataCompany,
                dataLocation,dataDateIn,
                dataProduceName,dataOther)
{
    setDataS(dataIndex,dataCompany,
        dataLocation,dataDateIn,
        dataProduceName,dataOther,function (tx)
        {
            if(tx=="deny")
            {
                console.log("license deny");
            }
            else
            {
                var web3 = initweb3();
                web3.eth.getAccounts(function (error,r)
                {
                    if (!error)
                    {
                        var address = r[0];
                        //var OIndex = JSON.stringify(data.field.dataIndex);
                        var Jindex = dataIndex.slice(1,(dataIndex.length-1));
                        var Tx = {"Tx":tx,"Index":Jindex,"From":address};
                        console.log("TxPost"+Tx.Tx);
                        $.ajax({
                            type: 'POST',
                            url: "/SetTxF",
                            dataType: "json",
                            data: JSON.stringify(Tx),
                            contentType : "application/json",
                            success: function(R) {
                                console.log("success save")
                            },
                            error: function() {
                                console.log("error");
                            }
                        });
                    }
                    else
                    {
                        console.log(error);
                    }
                });
            }
        });
}