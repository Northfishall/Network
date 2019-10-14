var newscript = document.createElement('script');
newscript.setAttribute('type','text/javascript');
newscript.setAttribute('src','web3.min.js');
var head = document.getElementsByTagName('head')[0];
head.appendChild(newscript);



function ConnectMetamask()
{
    try {
        if(window.ethereum)
        {
            ethereum.enable();
        }
        alert("requrie success");
    }
    catch(e)
    {
        console.log(e);
    }
}

function getcall()
{
    try {
        //var contractAddress = "0xc88C16AebA4A42d2609A951B4FE5E115Ec114528";
        //var localAddress = "0x6BCB00f582f6e57d3539fc5e99Fe79a4bB6FCbcD";
        var abi = [
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
                "constant": false,
                "inputs": [],
                "name": "Test",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
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
                        "name": "index",
                        "type": "string"
                    },
                    {
                        "name": "_original",
                        "type": "string"
                    },
                    {
                        "name": "_productName",
                        "type": "string"
                    },
                    {
                        "name": "_productWay",
                        "type": "string"
                    },
                    {
                        "name": "_productDate",
                        "type": "string"
                    },
                    {
                        "name": "_productCompany",
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
                        "name": "_original",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "name": "_productName",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "name": "_productWay",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "name": "_productDate",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "name": "_productCompany",
                        "type": "string"
                    }
                ],
                "name": "DataLogP",
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
                    },
                    {
                        "indexed": false,
                        "name": "TFoodName",
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
                    },
                    {
                        "indexed": false,
                        "name": "SFoodName",
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
        ];
        //init
        if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } else {
            console.log("local");
            // set the provider you want from Web3.providers
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        }

        //require metamask
        if (window.ethereum) {
            ethereum.enable();
        }
        web3.eth.defaultAccount = localAddress;
        // web3.js version 0.2.0
        //var infoContract = web3.eth.contract(abi);
        //var info = infoContract.at(contractAddress);
        var info = new web3.eth.Contract(abi, contractAddress);
        info.methods.getOriginal().call({from: web3.eth.defaultAccount},
            function (e, r) {
                if (!e) {
                    console.log(r);
                } else {
                    console.log(e);
                }
            });
    }
    catch (e)
    {
        console.log(e);
    }
}



function setDataP(Index,ProductName,
    Original,Date,
    SaveTime,
    CompanyName,Tel,
    Location,callback)
{
    console.log("index:"+Index);
    console.log("PN:"+ProductName);
    console.log("Ori:"+Original);
    console.log("Date:"+Date);
    console.log("SaveT:"+SaveTime);
    console.log("CompanyN:"+CompanyName);
    console.log("Tel:"+Tel);
    console.log("Location:"+Location);
    try
    {
        //****this is a requirejs version
        //var Web3 = require(['web3']);
        //var Web3 = require('web3');
        //var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
        //var localAddress = "0x6BCB00f582f6e57d3539fc5e99Fe79a4bB6FCbcD";
        //var contractAddress = "0x434C9fAdCF50922f1Ba3F756b5fe68388791DF0B";

        //init
        if (typeof web3 !== 'undefined')
        {
            web3 = new Web3(web3.currentProvider);
        }
        else
            {
            console.log("local");
            // set the provider you want from Web3.providers
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
            }
        //console.log(versionx+versionw);

        //require metamask
        if(window.ethereum)
        {
            ethereum.enable();
        }

        try
        {
            console.log("default:"+web3.eth.defaultAccount);
        }
        catch (e) {
            console.log(e);
        }

        web3.eth.getAccounts(function (error,r)
        {
            if(!error)
            {
                var address = r[0];
                console.log("r:"+r);
                console.log("add:"+address);
                web3.eth.defaultAccount = address;
                try
                {
                    console.log("default:"+web3.eth.defaultAccount);
                }
                catch (e) {
                    console.log(e);
                }
                //web3.eth.defaultAccount = localAddress;
                //web3 1.0.0

                //remove "" from form
                var IntIndex = parseInt(Index.slice(1,Index.length-1));
                var _ProductName = ProductName.slice(1,ProductName.length-1);
                var _Original = Original.slice(1,Original.length-1);
                var _Date = Date.slice(1,Date.length-1);
                var _SaveTime = SaveTime.slice(1,SaveTime.length-1);
                var _CompanyName = CompanyName.slice(1,CompanyName.length-1);
                var _Tel = Tel.slice(1,Tel.length-1);
                var _Location = Location.slice(1,Location.length-1);

                licenseP(address,function (license)
                {
                   if(license=="pick")
                   {
                       //console.log("index:"+Index);
                       console.log("PN:"+_ProductName);
                       console.log("Ori:"+_Original);
                       console.log("Date:"+_Date);
                       console.log("SaveT:"+_SaveTime);
                       console.log("CompanyN:"+_CompanyName);
                       console.log("Tel:"+_Tel);
                       console.log("Location:"+_Location);
                       var info = new web3.eth.Contract(abi,contractAddress);
                       console.log(contractAddress);

                       info.methods.setAllDataP(IntIndex,_ProductName,
                           _Original,_Date,
                           _SaveTime,
                           _CompanyName,_Tel,
                           _Location).send({from:web3.eth.defaultAccount},
                           function (e,r)
                           {
                               if(!e)
                               {
                                   callback(r);
                                   console.log(r);
                               }
                               else
                               {
                                   console.log(e);
                               }
                           });
                   }
                   else
                   {
                       callback("deny");
                   }
                });
                //return tx;
            }
            else
            {
                console.log(error);
            }
        });

/*        try
        {
            console.log("default:"+web3.eth.defaultAccount);
        }
        catch (e) {
            console.log(e);
        }
        //web3.eth.defaultAccount = localAddress;
        //web3 1.0.0
        var info = new web3.eth.Contract(abi,contractAddress);
        alert("in");
        info.methods.setAllDataP(Index,ProductName,
            Original,Date,
            SaveTime,
            CompanyName,Tel,
            Location).send({from:web3.eth.defaultAccount},
            function (e,r)
            {
                if(!e)
                {
                    console.log(r);
                }
                else
                {
                    console.log(e);
                }
            });*/



        //web3 0.2.0 init
        //var infoContract = web3.eth.Contract(abi);
        //var info = infoContract.at(contractAddress);

        // *****web3 0.2.0 function way******
/*        info.Test(function(err,resule)
        {
            if(!err)
            {
                alert("ok");
            }
            else
            {
                alert("function:"+err);
            }
        });
        info.Test.sendTransaction({from:"0x6BCB00f582f6e57d3539fc5e99Fe79a4bB6FCbcD"},function(err,res){
            if(!err)
            {
                alert("sendTransaction success!");
            }
            else
            {
                alert("sendTransactionfailed");
                alert(err);
            }
    });
        info.setOriginal("TestOriginal",function(err,result)
        {
            alert("in");
            if(!err)
            {
                alert("Success setOriginal");
            }
            else
            {
                alert("d:");
                alert(err);
            }
        });*/


    }
    catch (e) {
        alert(e);
        //document.getElementsByClassName("testClass").innerHTML="Error";
        console.log("error=>"+e);

    }
}

function setDataT(Index,CompanyName,Location,DateIn,
                  DateOut,FoodName,Other,callback)
{
    console.log("index:"+Index);
    console.log("PN:"+FoodName);
    console.log("DateIN:"+DateIn);
    console.log("DateOut:"+DateOut);
    console.log("CompanyN:"+CompanyName);
    console.log("Location:"+Location);
    console.log("other:"+Other);
    try {
        if (typeof web3 !== 'undefined')
        {
            web3 = new Web3(web3.currentProvider);
        }
        else
        {
            console.log("local");
            // set the provider you want from Web3.providers
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        }
        if(window.ethereum)
        {
            ethereum.enable();
        }

        web3.eth.getAccounts(function (error,r)
        {
            if(!error)
            {
                var address = r[0];
                console.log("r:"+r);
                console.log("add:"+address);
                web3.eth.defaultAccount = address;
                try
                {
                    console.log("default:"+web3.eth.defaultAccount);
                }

                catch (e) {
                    console.log(e);
                }
                //权限控制
                licenseT(address,function(license)
                    {
                        if(license == "pick")
                        {
                            //web3.eth.defaultAccount = localAddress;
                            //web3 1.0.0
                            var _CompanyName = CompanyName.slice(1,CompanyName.length-1);
                            var _Location = Location.slice(1,Location.length-1);
                            var _DateIn = DateIn.slice(1,DateIn.length-1);
                            var _DateOut = DateOut.slice(1,DateOut.length-1);
                            var _FoodName = FoodName.slice(1,FoodName.length-1);
                            var _Other = Other.slice(1,Other.length-1);
                            var IntIndex = parseInt(Index.slice(1,Index.length-1));
                            //var IntIndex = Index.slice(1,Index.length-2);
                            console.log(Index.slice(1,Index.length-1));
                            console.log("trans");
                            console.log(IntIndex);
                            var info = new web3.eth.Contract(abi,contractAddress);
                            console.log(contractAddress);
                            info.methods.setAllDataT(IntIndex,_CompanyName,_Location,
                                _DateIn,_DateOut,_FoodName,_Other).send({from:web3.eth.defaultAccount},
                                function (e,r)
                                {
                                    if(!e)
                                    {
                                        callback(r);
                                        console.log(r);
                                    }
                                    else
                                    {
                                        console.log(e);
                                    }
                                });
                        }
                        else
                        {
                            //console.log("deny");
                            callback("deny");
                        }
                    }
                );
            }
            else
            {
                console.log(error);
            }
        });



//defaultAccount address
/*
        web3.eth.defaultAccount = localAddress;
        //web3 1.0.0
        var info = new web3.eth.Contract(abi,contractAddress);
        info.methods.setAllDataT(Index,CompanyName,Location,
            DateIn,DateOut,FoodName).send({from:web3.eth.defaultAccount,gasPrice:3},
            function (e,r)
            {
                if(!e)
                {
                    console.log(r);
                }
                else
                {
                    console.log(e);
                }
            });
*/

    }
    catch (e) {
        console.log(e)
    }
}

function setDataS(Index,CompanyName,Location,
                  Date,ProduceName,other,callback)
{
    try {
        if (typeof web3 !== 'undefined')
        {
            web3 = new Web3(web3.currentProvider);
        }
        else {
            console.log("local");
            // set the provider you want from Web3.providers
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        }
        if (window.ethereum) {
            ethereum.enable();
        }
        //web3.eth.defaultAccount = localAddress;

        web3.eth.getAccounts(function (error,r)
        {
            if(!error)
            {
                var address = r[0];
                console.log("r:"+r);
                console.log("add:"+address);
                web3.eth.defaultAccount = address;
                try
                {
                    console.log("default:"+web3.eth.defaultAccount);
                }
                catch (e) {
                    console.log(e);
                }

                licenseF(address,function (license)
                {
                    //权限通过
                    if(license=="pick")
                    {
                        //web3.eth.defaultAccount = localAddress;
                        //web3 1.0.0
                        var IntIndex = parseInt(Index.slice(1,Index.length-1));
                        var _CompanyName = CompanyName.slice(1,CompanyName.length-1);
                        var _Location = Location.slice(1,Location.length-1);
                        var _Date = Date.slice(1,Date.length-1);
                        var _ProduceName = ProduceName.slice(1,ProduceName.length-1);
                        var _Other = other.slice(1,(other.length-1));
                        //var IntIndex = Index.slice(1,Index.length-2);
                        console.log(Index.slice(1,Index.length-1));
                        console.log("trans");
                        console.log(IntIndex);
                        var info = new web3.eth.Contract(abi,contractAddress);
                        console.log(contractAddress);
                        info.methods.setAllDataS(IntIndex,_CompanyName,_Location,
                            _Date,_ProduceName,_Other).send({from:web3.eth.defaultAccount},
                            function (e,r)
                            {
                                if(!e)
                                {
                                    callback(r);
                                    console.log(r);
                                }
                                else
                                {
                                    console.log(e);
                                }
                            });
                    }
                    else
                    {
                        callback("deny");
                    }
                });
            }
            else
            {
                console.log(error);
            }
        });




/*        //web3 1.0.0
        var info = new web3.eth.Contract(abi, contractAddress);
        info.methods.setAllDataS(Index,CompanyName,Location,
            Date,ProductName).send({from:web3.eth.defaultAccount,gasPrice:3},
            function (e,r)
            {
                if(!e)
                {
                    console.log(r);
                }
                else
                {
                    console.log(e);
                }
            });*/
    }
    catch (e)
    {
        console.log(e);
    }

}
//initWeb3();