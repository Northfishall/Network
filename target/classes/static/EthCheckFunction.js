//其中这里三个都可以合成一个 加个Event名字的参数就行了 懒得改了
//通过ID查询运输商的信息
function checkPastByIndexT(Index,BlockNumber,callback)
{
    try {
        //console.log(Index);
        //init
        // initweb3 located in EthSetting.js
        web3 = initweb3();

        web3.eth.getAccounts(function (error,r)
        {
            if(!error)
            {
                //通过getAccounts函数获取当前的以太坊账号地址
                var address = r[0];
                web3.eth.defaultAccount = address;
                //讲ID转化成Int类型，为了统一，所有传输的参数都为string类型
                var IntIndex = parseInt(Index);
                //var IntIndex = parseInt(Index.slice(1,Index.length-1));
                //根据abi以及智能合约地址创建一个实例
                var info = new web3.eth.Contract(abi,contractAddress);
                //搜索的范围
                var from = BlockNumber-1;
                var to = BlockNumber+1;
                //此处为web3.js 1.0.0版本的调用方式
                info.getPastEvents('DataLogT',{filter:{'index' : IntIndex},fromBlock:from,toBlock:to}, //filter:{'index' : Index},
                    function(e,events)
                    {
                        if(!e)
                        {
                            //将结果作为回调函数结果返回
                            callback(events);
                        }
                        else
                        {
                            console.log(e);
                        }
                    }).then(function (events)
                {
                    console.log("event:"+events);
                });
            }
            else
            {
                console.log(error);
            }
        });

        //web3.eth.defaultAccount = localAddress;
        // web3 version 0.2.0
        // var infoContract = web3.eth.contract(abi);
        // var info = infoContract.at(contractAddress);

    }
    catch (e) {
        console.log(e);
    }
}
//通过ID查询经销商的信息
function checkPastByIndexF(Index,BlockNumber,callback)
{
    try {
        //实现同checkPastByIndexT 只是Event name 不同
        //init
        web3 = initweb3();

        web3.eth.getAccounts(function (error,r)
        {
            if(!error)
            {
                var address = r[0];
                web3.eth.defaultAccount = address;
                //var IntIndex = parseInt(Index.slice(1,Index.length-1));
                var IntIndex = parseInt(Index);
                var info = new web3.eth.Contract(abi,contractAddress);
                var from = BlockNumber-1;
                var to = BlockNumber+1;
                info.getPastEvents('DataLogS',{filter:{'index' : IntIndex},fromBlock:from,toBlock:to}, //filter:{'index' : Index},
                    function(e,events)
                    {
                        if(!e)
                        {
                            callback(events);
                            console.log(events);

                        }
                        else
                        {
                            console.log(e);
                        }
                    }).then(function (events)
                {
                    console.log("event2:"+events);
                });
            }
            else
            {
                console.log(error);
            }
        });



        // web3 version 0.2.0
        // var infoContract = web3.eth.contract(abi);
        // var info = infoContract.at(contractAddress);

    }
    catch (e) {
        console.log(e);
    }
}
//通过ID查询生产商的信息
function checkPastByIndexP(Index,BlockNumber,callback)
{
    //var localAddress = "0x6BCB00f582f6e57d3539fc5e99Fe79a4bB6FCbcD";
    //var contractAddress = "0xc88C16AebA4A42d2609A951B4FE5E115Ec114528";
    /*var abi = [
        {
            "constant": true,
            "inputs": [],
            "name": "productCompany",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "index",
                    "type": "string"
                },
                {
                    "name": "SCompanyName",
                    "type": "string"
                },
                {
                    "name": "SLocation",
                    "type": "string"
                },
                {
                    "name": "SData",
                    "type": "string"
                },
                {
                    "name": "SFoodName",
                    "type": "string"
                }
            ],
            "name": "setAllDataS",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "datafood",
            "outputs": [
                {
                    "name": "ID",
                    "type": "uint256"
                },
                {
                    "name": "FoodName",
                    "type": "string"
                },
                {
                    "name": "CompanyName",
                    "type": "string"
                },
                {
                    "name": "dataCount",
                    "type": "uint256"
                },
                {
                    "name": "date",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "originial1",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "dataCount",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "CompanyAddress",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_productDate",
                    "type": "string"
                }
            ],
            "name": "setProductDate",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "productName",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "productDate",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "originial3",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "productWay",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "index",
                    "type": "string"
                },
                {
                    "name": "PFoodName",
                    "type": "string"
                },
                {
                    "name": "POriginal",
                    "type": "string"
                },
                {
                    "name": "PProductDate",
                    "type": "string"
                },
                {
                    "name": "PSaveTime",
                    "type": "string"
                },
                {
                    "name": "PCompanyName",
                    "type": "string"
                },
                {
                    "name": "PTel",
                    "type": "string"
                },
                {
                    "name": "PLocation",
                    "type": "string"
                }
            ],
            "name": "setAllDataP",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "ID",
                    "type": "uint256"
                },
                {
                    "name": "FoodName",
                    "type": "string"
                },
                {
                    "name": "CompanyName",
                    "type": "string"
                },
                {
                    "name": "date",
                    "type": "string"
                }
            ],
            "name": "newData",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_original",
                    "type": "string"
                },
                {
                    "name": "index",
                    "type": "uint256"
                }
            ],
            "name": "setOriginal",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "originial2",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "index",
                    "type": "string"
                },
                {
                    "name": "TCompanyName",
                    "type": "string"
                },
                {
                    "name": "TLocation",
                    "type": "string"
                },
                {
                    "name": "TDateIn",
                    "type": "string"
                },
                {
                    "name": "TDataOut",
                    "type": "string"
                },
                {
                    "name": "TFoodName",
                    "type": "string"
                }
            ],
            "name": "setAllDataT",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "getOriginal",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "index",
                    "type": "string"
                },
                {
                    "indexed": true,
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "PFoodName",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "POriginal",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "PProductDate",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "PSaveTime",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "PCompanyName",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "PTel",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "PLocation",
                    "type": "string"
                }
            ],
            "name": "DataLogP1",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "index",
                    "type": "string"
                },
                {
                    "indexed": true,
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "PCompanyName",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "PTel",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "PLocation",
                    "type": "string"
                }
            ],
            "name": "DataLOgP2",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "index",
                    "type": "string"
                },
                {
                    "indexed": true,
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "TFoodName",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "TCompanyName",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "TLocation",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "TDateIn",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "TDataOut",
                    "type": "string"
                }
            ],
            "name": "DataLogT",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "index",
                    "type": "string"
                },
                {
                    "indexed": true,
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "SFoodName",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "SCompanyName",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "SLocation",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "SData",
                    "type": "string"
                }
            ],
            "name": "DataLogS",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "index",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "TestData",
                    "type": "string"
                }
            ],
            "name": "TestEvent",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "senderAddress",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "TestData",
                    "type": "string"
                }
            ],
            "name": "TestAddress",
            "type": "event"
        }
    ] ;*/
    try
    {
        //init
        web3 = initweb3();


        web3.eth.getAccounts(function (error,r)
        {
            if(!error)
            {
                var address = r[0];
                console.log(address);
                web3.eth.defaultAccount = address;
                //var IntIndex = parseInt(Index.slice(1,Index.length-1));
                var IntIndex = parseInt(Index);
                var info = new web3.eth.Contract(abi,contractAddress);
                var from = BlockNumber-1;
                var to = BlockNumber+1;
                info.getPastEvents('DataLogP1',{filter:{'index' : IntIndex},fromBlock:from,toBlock:to}, //filter:{'index' : Index},
                    function(e,events)
                    {
                        if(!e)
                        {
                            callback(events);
                            console.log(events);

                        }
                        else
                        {
                            console.log(e);
                        }
                    }).then(function (events)
                {
                    console.log("event2:"+events);
                });
            }
            else
            {
                console.log(error);
            }
        });

        // web3 version 0.2.0
        // var infoContract = web3.eth.contract(abi);
        // var info = infoContract.at(contractAddress);

        /*

        var event = info.TestEvent({index : 111},{fromBlock:69,toBlock:74});
        alert("2");
        event.watch(function (error,result)
        {
            alert("in");
            if(!error)
            {
                alert("result:"+result);
                console.log(result);
            }
            else
            {
                alert("error:"+error);
                console.log(error);
            }
        })
        event.get(function (e,r)
        {
            if(!e)
            {
                alert(r);
            }
            else
            {
                alert(e);
            }
        })
        event.stopWatching();
*/

        /*
        info.getPastEvent('TestEvent',{filter:{index:111},fromBlock:50,toBlock:75},
            function(e,r)
            {
                if(e)
                {
                    alert(e);
                }
                else
                {
                    alert(r);
                }
            }
        ).then(function(events)
    {
        console.log(events);
    });
*/

    }
    catch (e)
    {
        alert(e);
        console.log(e);
    }
}

//address with "" index slice "" in html
//通过以太坊账号地址查询运输商的信息
function checkPastByAddressT(FromAddress,BlockNumber,callback)
{
    try {

        //init
        web3 = initweb3();

        web3.eth.getAccounts(function (error,r)
        {
            if(!error)
            {
                web3.eth.defaultAccount = r[0];
                //var IntIndex = parseInt(Index.slice(1,Index.length-1));
                var info = new web3.eth.Contract(abi,contractAddress);
                //相比于通过ID查询，这里只是修改了filter
                info.getPastEvents('DataLogT',{filter:{'from' : FromAddress},fromBlock:(BlockNumber-1),toBlock:(BlockNumber+1)}, //filter:{'index' : Index},
                    function(e,events)
                    {
                        if(!e)
                        {
                            callback(events);
                            console.log(events);
                        }
                        else
                        {
                            console.log(e);
                        }
                    }).then(function (events)
                {
                    //alert(events);
                });
            }
            else
            {
                console.log(error);
            }
        });
    }
    catch (e) {
        console.log(e);
    }
}
//通过以太坊账号地址查询经销商的信息
function checkPastByAddressF(FromAddress,BlockNumber,callback)
{
    try {
        //init
        web3 = initweb3();

        web3.eth.getAccounts(function (error,r)
        {
            if(!error)
            {
                web3.eth.defaultAccount = r[0];
                //var IntIndex = parseInt(Index.slice(1,Index.length-1));
                var info = new web3.eth.Contract(abi,contractAddress);
                info.getPastEvents('DataLogS',{filter:{'from' : FromAddress},fromBlock:(BlockNumber-1),toBlock:(BlockNumber+1)}, //filter:{'index' : Index},
                    function(e,events)
                    {
                        if(!e)
                        {
                            callback(events);
                            console.log(events);
                        }
                        else
                        {
                            console.log(e);
                        }
                    }).then(function (events)
                {
                    console.log(events);
                });
            }
            else
            {
                console.log(error);
            }
        });

    }
    catch (e) {
        console.log(e);
    }
}
//通过以太坊账号地址查询生产商的信息
function checkPastByAddressP(FromAddress,BlockNumber,callback)
{
    try
    {
        //init
        web3 = initweb3();
        web3.eth.getAccounts(function (error,r)
        {
            if(!error)
            {
                web3.eth.defaultAccount = r[0];
                //var IntIndex = parseInt(Index.slice(1,Index.length-1));
                var info = new web3.eth.Contract(abi,contractAddress);
                //i don't know  why the string has "" maybe there is a better way
                //var Raddress = FromAddress.slice(1,(FromAddress.length-1));
                info.getPastEvents('DataLogP1',{filter:{'from' : FromAddress},fromBlock:(BlockNumber-1),toBlock:(BlockNumber+1)}, //filter:{'index' : Index},
                    function(e,events)
                    {
                        if(!e)
                        {
                            console.log(events[0]);
                            callback(events);
                        }
                        else
                        {
                            console.log(e);
                        }
                    }).then(function (events)
                {
                    console.log(events);
                });
            }
            else
            {
                console.log(error);
            }
        });

        // web3 version 0.2.0
        // var infoContract = web3.eth.contract(abi);
        // var info = infoContract.at(contractAddress);

        /*

        var event = info.TestEvent({index : 111},{fromBlock:69,toBlock:74});
        alert("2");
        event.watch(function (error,result)
        {
            alert("in");
            if(!error)
            {
                alert("result:"+result);
                console.log(result);
            }
            else
            {
                alert("error:"+error);
                console.log(error);
            }
        })
        event.get(function (e,r)
        {
            if(!e)
            {
                alert(r);
            }
            else
            {
                alert(e);
            }
        })
        event.stopWatching();
*/

        /*
        info.getPastEvent('TestEvent',{filter:{index:111},fromBlock:50,toBlock:75},
            function(e,r)
            {
                if(e)
                {
                    alert(e);
                }
                else
                {
                    alert(r);
                }
            }
        ).then(function(events)
    {
        console.log(events);
    });
*/

    }
    catch (e)
    {
        alert(e);
        console.log(e);
    }
}
//通过ID以及以太坊账号地址查询运输商的信息
function checkPastByIndexAddressT(Index,FromAddress,BlockNumber,callback)
{
    try {

        //init
        web3 = initweb3();
        //可能读取不需要默认地址 没试过 设置着总没错
        web3.eth.getAccounts(function (error,r)
        {
            if(!error)
            {
                web3.eth.defaultAccount = r[0];
                //var IntIndex = parseInt(Index.slice(1,Index.length-1));
                var IntIndex = parseInt(Index);
                var info = new web3.eth.Contract(abi,contractAddress);
                //var Raddress = FromAddress.slice(1,(FromAddress.length-1));
                //根据Index和fromAddress 查询对应BlockNumber的Event 这里是DataLogT 对应智能合约中的 event
                info.getPastEvents('DataLogT',{filter:{'index':IntIndex,'from' : FromAddress},fromBlock:BlockNumber-1,toBlock:BlockNumber+1}, //filter:{'index' : Index},
                    function(e,events)
                    {
                        if(!e)
                        {
                            callback(events);
                            //alert("event1"+events);
                            console.log(events);

                        }
                        else
                        {
                            console.log(e);
                            //alert(e);
                        }
                    }).then(function (events)
                {
                    console.log("event2:"+events);
                });
            }
            else
            {
                console.log(error);
            }
        });
    }
    catch (e) {
        console.log(e);
    }
}
//通过ID以及以太坊账号地址查询经销商的信息
function checkPastByIndexAddressF(Index,FromAddress,BlockNumber,callback)
{
    try {
        //init
        web3 = initweb3();

        web3.eth.getAccounts(function (error,r)
        {
            if(!error)
            {
                web3.eth.defaultAccount = r[0];
                //var IntIndex = parseInt(Index.slice(1,Index.length-1));
                var IntIndex = parseInt(Index);
                var info = new web3.eth.Contract(abi,contractAddress);
                //var Raddress = FromAddress.slice(1,(FromAddress.length-1));
                info.getPastEvents('DataLogS',{filter:{'index':IntIndex,'from' : FromAddress},fromBlock:BlockNumber-1,toBlock:BlockNumber+1}, //filter:{'index' : Index},
                    function(e,events)
                    {
                        if(!e)
                        {
                            callback(events);
                            //alert("event1"+events);
                            console.log(events);

                        }
                        else
                        {
                            console.log(e);
                            //alert(e);
                        }
                    }).then(function (events)
                {
                    //alert(events);
                    console.log("event2:"+events);
                });
            }
            else
            {
                console.log(error);
            }
        });

    }
    catch (e) {
        console.log(e);
    }
}
//通过ID以及以太坊账号地址查询生产商的信息
function checkPastByIndexAddressP(Index,FromAddress,BlockNumber,callback)
{
    try
    {
        //init
        web3 = initweb3();


        web3.eth.getAccounts(function (error,r)
        {
            if(!error)
            {
                web3.eth.defaultAccount = r[0];
                //var IntIndex = parseInt(Index.slice(1,Index.length-1));
                var IntIndex = parseInt(Index);
                var info = new web3.eth.Contract(abi,contractAddress);
                //var Raddress = FromAddress.slice(1,(FromAddress.length-1));
                info.getPastEvents('DataLogP1',{filter:{'index':IntIndex,'from' : FromAddress},fromBlock:BlockNumber-1,toBlock:BlockNumber+1}, //filter:{'index' : Index},
                    function(e,events)
                    {
                        if(!e)
                        {
                            callback(events);
                            //alert("event1"+events);
                            console.log(events);
                        }
                        else
                        {
                            console.log(e);
                            //alert(e);
                        }
                    }).then(function (events)
                {
                    //alert(events);
                    console.log("event2:"+events);
                });
            }
            else
            {
                console.log(error);
            }
        });
    }
    catch (e)
    {
        alert(e);
        console.log(e);
    }
}

//通过交易收据查询生产商存入的区块号
function checkBlockNumberP(Tx,callback)
{
    var web3 = initweb3();
    console.log("Tx"+Tx);
    //var TxN = Tx.slice(1,(Tx.length-1));
    //console.log("Tx"+TxN);
    web3.eth.getTransaction(Tx,
        function (e,r)
    {
        if(!e)
        {
            console.log("getTransaction result :");
            //获取返回结果中的blockNumber项。即为所在区块号
            console.log(r.blockNumber);
            callback(r.blockNumber);
        }
        else
        {
            console.log("getTransaction error :"+e);
        }

    });
}
//通过交易收据查询运输商存入的区块号
function checkBlockNumberT(Tx,callback)
{
    var web3 = initweb3();
    //var TxN = Tx.slice(1,(Tx.length-1));
    web3.eth.getTransaction(Tx,
        function (e,r)
        {
            if(!e)
            {
                callback(r.blockNumber);
            }
            else
            {
                console.log("error!");
            }
        });
}
//通过交易收据查询经销商存入的区块号
function checkBlockNumberF(Tx,callback)
{
    var web3 = initweb3();
    //var TxN = Tx.slice(1,(Tx.length-1));
    web3.eth.getTransaction(Tx,
        function (e,r)
        {
            if(!e)
            {
                callback(r.blockNumber);
            }
            else
            {
                console.log("error!");
            }
        });
}
