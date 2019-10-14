//contract abi and contract address on blockchain
//get abi on **https://remix.ethereum.org***
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
                "type": "uint256"
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
            },
            {
                "name": "other",
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
                "type": "uint256"
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
        "constant": false,
        "inputs": [
            {
                "name": "index",
                "type": "uint256"
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
            },
            {
                "name": "other",
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
                "type": "uint256"
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
                "type": "uint256"
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
                "type": "uint256"
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
            },
            {
                "indexed": false,
                "name": "other",
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
                "type": "uint256"
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
            },
            {
                "indexed": false,
                "name": "other",
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
//使用truffle migrate之后返回智能合约的地址
var contractAddress = "0x4b1ba08a277338fe7c62260755b78e7f82e0eae5";
//var contractAddress = "0x78062F03a05F0b855A7928f749bD0Ed0Ff14A43C";

//初始化web3
function initweb3() {
    try {
        //init
        if (typeof web3 !== 'undefined')
        {
            //通过MetaMask进行初始化，目前用的都是这个
            web3 = new Web3(web3.currentProvider);
        } else {
            console.log("local");
            // set the provider you want from Web3.providers
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        }

        //对MetaMask请求权限，MetaMask会弹出对话框确认
        if (window.ethereum) {
            ethereum.enable();
        }
        return web3;


    }catch (e) {
        return null;
    }
}