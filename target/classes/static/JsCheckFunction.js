
function handleData(ResultP,ResultT,ResultF) {
    console.log(ResultP);
    console.log(ResultT);
    console.log(ResultF);
}

function JsCheckByIndexP(Index,callback)
{
    var Map = {"Index":Index};
    console.log("check by index");
    //$when().then();
    $.ajax({
        type: 'POST',
        url: "/GetTxP",
        dataType: "json",
        data: JSON.stringify(Map),
        contentType : "application/json",
        success: function(R) {
            var lengthbad = JSON.stringify(R.length);
            var length = lengthbad.slice(1,(lengthbad.length-1));
            if(length=="0")
            {
                alert("无对应ID产品生产商信息");
                callback("No data");
            }
            else
            {
                console.log(R);
                //由于生产商只能有一个所以只取0 ，为了与其他拥有多个的格式相同所以不做另外处理
                console.log("GetTxP return data :"+JSON.stringify(R["0"]));
                console.log("success get");
                var txbad = JSON.stringify(R["0"]);
                var tx = txbad.slice(1,(txbad.length-1));
                checkBlockNumberP(tx,
                    function (BlockNumber) {
                        console.log(BlockNumber);
                        var IntBlockNumber = parseInt(BlockNumber);
                        checkPastByIndexP(Index,IntBlockNumber,function (r) {
                            if(r)
                            {
                                callback(r);
                            }
                            else
                            {
                                console.log("error!");
                            }
                        });

                    });
            }
        },
        error: function() {
            console.log("error");
        }
    });
}
function JsCheckByIndexT(Index,callback)
{
    var Map = {"Index":Index};
    $.ajax({
        type: 'POST',
        url: "/GetTxT",
        dataType: "json",
        data: JSON.stringify(Map),
        contentType : "application/json",
        success: function(R) {
            var lengthbad = JSON.stringify(R.length);
            var length = lengthbad.slice(1,(lengthbad.length-1));
            if(length=="0")
            {
                alert("无对应ID产品运输商信息");
                callback("No data");
                //console.log("Error index");
            }
            else
            {
                var result = [];
                //异步请求返回个数记录
                var flag = 0 ;
                console.log(R);
                console.log("GetTxT return data :"+JSON.stringify(R["0"]));
                console.log("success get");
                var intlength = parseInt(length);
                //运输商存在多组信息的情况
                for(var i =0 ;i<intlength;i++)
                {
                    //查询获得交易收据是按照输入顺序获得的
                    //通过0.5s的延迟来保证最终异步查询获得的数据也是按照顺序来的
                    var interval;
                    interval = setInterval(function() { console.log("dely:i");console.log(i); }, 1000);  //5秒循环调用执行remind()函数
                    clearInterval(interval);
                    //停顿0.5s之后开始执行
                    var txbad = JSON.stringify(R[i]);
                    var tx = txbad.slice(1,(txbad.length-1));
                    checkBlockNumberT(tx,
                        function (BlockNumber) {
                            console.log(BlockNumber);
                            var IntBlockNumber = parseInt(BlockNumber);
                            checkPastByIndexT(Index,IntBlockNumber,function (r)
                            {
                                if(r)
                                {

                                    for(var ii in r){
                                        result.push(r[ii]);
                                    }

                                    // result.push(r);
                                    console.log(JSON.stringify(result));
                                    flag++;
                                    if(flag == intlength)
                                    {
                                        callback(result);
                                    }
                                }
                                else
                                {
                                    console.log("error!");
                                }
                            });

                        });
                }
/*                var txbad = JSON.stringify(R["0"]);
                var tx = txbad.slice(1,(txbad.length-1));
                checkBlockNumberT(tx,
                    function (BlockNumber) {
                        console.log(BlockNumber);
                        var IntBlockNumber = parseInt(BlockNumber);
                        checkPastByIndexT(Index,IntBlockNumber,function (r)
                        {
                            if(r)
                            {
                                callback(r);
                            }
                            else
                            {
                                console.log("error!");
                            }
                        });

                    });*/
            }
        },
        error: function() {
            console.log("error");
        }
    });

}
function JsCheckByIndexF(Index,callback)
{
    var Map = {"Index":Index};
    $.ajax({
        type: 'POST',
        url: "/GetTxF",
        //async:false,
        dataType: "json",
        data: JSON.stringify(Map),
        contentType : "application/json",
        success: function(R) {
            var lengthbad = JSON.stringify(R.length);
            var length = lengthbad.slice(1,(lengthbad.length-1));
            if(length=="0")
            {

                alert("无对应ID产品经销商信息！");
                callback("No data");
                //console.log("Error index");
            }
            else
            {
                console.log(R);
                console.log("GetTxF return data :"+JSON.stringify(R["0"]));
                console.log("success get");
                var txbad = JSON.stringify(R["0"]);
                var tx = txbad.slice(1,(txbad.length-1));
                checkBlockNumberF(tx,
                    function (BlockNumber) {
                        console.log(BlockNumber);
                        var IntBlockNumber = parseInt(BlockNumber);
                        checkPastByIndexF(Index,IntBlockNumber,function (r) {
                            if(r)
                            {
                                callback(r);
                            }
                            else
                            {
                                console.log("error!");
                            }
                        });

                    });
            }
        },
        error: function() {
            console.log("error");
        }
    });

}

function JsCheckByAddress(Name,callback)
{
    $.ajax({
        type: 'POST',
        url: "/user",
        dataType: "json",
        data: JSON.stringify(Name),
        contentType : "application/json",
        success: function(R)
        {
            var existbad = JSON.stringify(R.Result);
            var exist = existbad.slice(1,(existbad.length-1));
            if(exist=="F")
            {
                callback("NoData");
                alert("公司未注册！请检查输入！");
            }
            else
            {
                console.log(R);
                console.log(JSON.stringify(R.Address));
                var TypeBad = JSON.stringify(R.Type);
                var TypeOriginal = TypeBad.slice(1,(TypeBad.length-1));
                var AddressBad = JSON.stringify(R.Address);
                var AddressOriginal = AddressBad.slice(1,(AddressBad.length-1));
                //var ProduceInf = checkPastByAddressP(JSON.stringify(R.Address));
                var AddressPajax = {"Address":AddressOriginal};
                var ResultByCompanyName = [];
                var clock = 0;
                var lengthbad = JSON.stringify(R.length);
                console.log(lengthbad);
                var length = parseInt(lengthbad.slice(1,(lengthbad.length-1)));
                //输入为生产商
                if(TypeOriginal=="P")
                {
                    ResultByCompanyName.push({"Type":"P"});
                    for(var i =0;i<length;i++)
                    {
                        var txbad = JSON.stringify(R[i+""]);
                        var tx = txbad.slice(1,(txbad.length-1));
                        checkBlockNumberP(tx,function (bn)
                        {
                            console.log("BlockNumber:"+bn);
                            var blockn = parseInt(bn);
                            checkPastByAddressP(AddressOriginal,blockn,
                                function (Events)
                                {
                                    clock++;
                                    console.log(Events[0+""].returnValues);
                                    ResultByCompanyName.push(Events[0+""].returnValues);
                                    if(clock==length)
                                    {
                                        //console.log("get all data");
                                        //console.log(ResultByCompanyName);
                                        callback(ResultByCompanyName);
                                    }
                                });
                        });
                    }
                }
                //输入为运输商
                else if (TypeOriginal == "T")
                {
                    ResultByCompanyName.push({"Type":"T"});
                    for(var i =0;i<length;i++)
                    {
                        var txbad = JSON.stringify(R[i+""]);
                        var tx = txbad.slice(1,(txbad.length-1));
                        checkBlockNumberT(tx,function (bn)
                        {
                            console.log(bn);
                            var blockn = parseInt(bn);
                            checkPastByAddressT(AddressOriginal,blockn,
                                function (Events)
                                {
                                    clock++;
                                    console.log(Events[0+""].returnValues);
                                    ResultByCompanyName.push(Events[0+""].returnValues);
                                    if(clock==length)
                                    {
                                        //console.log("get all data");
                                        //console.log(ResultByCompanyName);
                                        callback(ResultByCompanyName);
                                    }
                                });
                        });
                    }
                }
                //输入为经销商
                else if (TypeOriginal == "F")
                {
                    ResultByCompanyName.push({"Type":"F"});
                    for(var i =0;i<length;i++)
                    {
                        var txbad = JSON.stringify(R[i+""]);
                        console.log(txbad);
                        var tx = txbad.slice(1,(txbad.length-1));
                        console.log(tx);
                        checkBlockNumberF(tx,function (bn)
                        {
                            console.log("BlockNumber:"+bn);
                            var blockn = parseInt(bn);
                            checkPastByAddressF(AddressOriginal,blockn,
                                function (Events)
                                {
                                    clock++;
                                    console.log(Events[0+""].returnValues);
                                    ResultByCompanyName.push(Events[0+""].returnValues);
                                    if(clock==length)
                                    {
                                        //console.log("get all data");
                                        //console.log(ResultByCompanyName);
                                        callback(ResultByCompanyName);
                                    }
                                });
                        });
                    }
                }
                else
                {
                    alert("发生了数据库数据错误！请联系管理员!");
                }
            }
            },
        error: function() {
            console.log("error");
        }
    });
}

function JsCheckByIndexAddress(Index,Name,callback)
{
    $.ajax({
        type: 'POST',
        url: "/AI",
        dataType: "json",
        data: JSON.stringify(Name),
        contentType : "application/json",
        success: function(R)
        {
            var existbad = JSON.stringify(R.Result);
            var exist = existbad.slice(1,(existbad.length-1));
            if(exist=="F")
            {
                alert("公司未注册或ID错误！请检查输入！");
            }
            else
            {
                console.log(R);
                console.log(JSON.stringify(R.Address));
                var TypeBad = JSON.stringify(R.Type);
                var TypeOriginal = TypeBad.slice(1,(TypeBad.length-1));
                var AddressBad = JSON.stringify(R.Address);
                var AddressOriginal = AddressBad.slice(1,(AddressBad.length-1));
                //var ProduceInf = checkPastByAddressP(JSON.stringify(R.Address));
                var AddressPajax = {"Address":AddressOriginal};
                var ResultByCompanyName = [];
                var clock = 0;
                var lengthbad = JSON.stringify(R.length);
                console.log(lengthbad);
                var length = parseInt(lengthbad.slice(1,(lengthbad.length-1)));
                console.log("Type:");
                console.log(TypeOriginal);

                //输入为生产商
                if(TypeOriginal=="P")
                {
                    ResultByCompanyName.push({"Type":"P"});
                    for(var i =0;i<length;i++)
                    {
                        var txbad = JSON.stringify(R[i+""]);
                        var tx = txbad.slice(1,(txbad.length-1));
                        checkBlockNumberP(tx,function (bn)
                        {
                            console.log("BlockNumber:"+bn);
                            var blockn = parseInt(bn);
                            checkPastByIndexAddressP(Index,AddressOriginal,blockn,
                                function (Events)
                                {
                                    clock++;
                                    console.log(Events[0+""].returnValues);
                                    ResultByCompanyName.push(Events[0+""].returnValues);
                                    // console.log(Events[0+""].returnValues);
                                    // ResultByCompanyName.push(Events[0+""].returnValues);
                                    if(clock==length)
                                    {
                                        console.log("get all data");
                                        //console.log(ResultByCompanyName);
                                        callback(ResultByCompanyName);
                                    }
                                });
                        });
                    }
                }
                //输入为运输商
                else if (TypeOriginal == "T")
                {
                    ResultByCompanyName.push({"Type":"T"});
                    for(var i =0;i<length;i++)
                    {
                        var txbad = JSON.stringify(R[i+""]);
                        var tx = txbad.slice(1,(txbad.length-1));
                        checkBlockNumberT(tx,function (bn)
                        {
                            console.log(bn);
                            var blockn = parseInt(bn);
                            checkPastByIndexAddressT(Index,AddressOriginal,blockn,
                                function (Events)
                                {
                                    clock++;
                                    if(Events!=undefined)
                                    {
                                        console.log(Events[0+""].returnValues);
                                        ResultByCompanyName.push(Events[0+""].returnValues);
                                    }
                                    //console.log(Events[0+""].returnValues);
                                    //ResultByCompanyName.push(Events[0+""].returnValues);
                                    if(clock==length)
                                    {
                                        console.log("get all data");
                                        //console.log(ResultByCompanyName);
                                        callback(ResultByCompanyName);
                                    }
                                });
                        });
                    }
                }
                //输入为经销商
                else if (TypeOriginal == "F")
                {
                    ResultByCompanyName.push({"Type":"F"});
                    for(var i =0;i<length;i++)
                    {
                        var txbad = JSON.stringify(R[i+""]);
                        console.log(txbad);
                        var tx = txbad.slice(1,(txbad.length-1));
                        console.log(tx);
                        checkBlockNumberF(tx,function (bn)
                        {
                            console.log("BlockNumber:"+bn);
                            var blockn = parseInt(bn);
                            checkPastByIndexAddressF(Index,AddressOriginal,blockn,
                                function (Events)
                                {
                                    clock++;
                                    console.log(Events[0+""].returnValues);
                                    ResultByCompanyName.push(Events[0+""].returnValues);
                                    if(clock==length)
                                    {
                                        console.log("get all data");
                                        //console.log(ResultByCompanyName);
                                        callback(ResultByCompanyName);
                                    }
                                });
                        });
                    }
                }
                else
                {
                    alert("发生了数据库数据错误！请联系管理员!");
                }
            }
            //var TransitInf = checkPastByAddressT(Address);
            //var FranchiserInf = checkPastByAddressF(Address);
            //console.log(ProduceInf);
        },
        error: function() {
            console.log("error");
        }
    });
}
