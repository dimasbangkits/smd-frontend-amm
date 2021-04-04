(this["webpackJsonpgoose-frontend-amm"] = this["webpackJsonpgoose-frontend-amm"] || []).push([
    [2], {
        116: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')
        },
        142: function(e) {
            e.exports = JSON.parse('{"name":"pancakeswap","timestamp":"2020-08-25T15:41:29.665Z","version":{"major":1,"minor":3,"patch":1},"tags":{},"logoURI":"/images/coins/wbnb.png","keywords":["pancake","default"],"tokens":[{"name":"WBNB Token","symbol":"WBNB","address":"0xae13d989dac2f0debff460ac112a837c89baa7cd","chainId":97,"decimals":18,"logoURI":"/images/coins/BUSD.png"},{"name":"WBNB Token","symbol":"WBNB","address":"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c","chainId":56,"decimals":18},{"name":"BUSD Token","symbol":"BUSD","address":"0xe9e7cea3dedca5984780bafc599bd69add087d56","chainId":56,"decimals":18,"logoURI":"/images/coins/BUSD.png"}]}')
        },
        164: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        165: function(e) {
            e.exports = JSON.parse('[{"name":"TokenPurchase","inputs":[{"type":"address","name":"buyer","indexed":true},{"type":"uint256","name":"eth_sold","indexed":true},{"type":"uint256","name":"tokens_bought","indexed":true}],"anonymous":false,"type":"event"},{"name":"EthPurchase","inputs":[{"type":"address","name":"buyer","indexed":true},{"type":"uint256","name":"tokens_sold","indexed":true},{"type":"uint256","name":"eth_bought","indexed":true}],"anonymous":false,"type":"event"},{"name":"AddLiquidity","inputs":[{"type":"address","name":"provider","indexed":true},{"type":"uint256","name":"eth_amount","indexed":true},{"type":"uint256","name":"token_amount","indexed":true}],"anonymous":false,"type":"event"},{"name":"RemoveLiquidity","inputs":[{"type":"address","name":"provider","indexed":true},{"type":"uint256","name":"eth_amount","indexed":true},{"type":"uint256","name":"token_amount","indexed":true}],"anonymous":false,"type":"event"},{"name":"Transfer","inputs":[{"type":"address","name":"_from","indexed":true},{"type":"address","name":"_to","indexed":true},{"type":"uint256","name":"_value","indexed":false}],"anonymous":false,"type":"event"},{"name":"Approval","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_spender","indexed":true},{"type":"uint256","name":"_value","indexed":false}],"anonymous":false,"type":"event"},{"name":"setup","outputs":[],"inputs":[{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"addLiquidity","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_liquidity"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function"},{"name":"removeLiquidity","outputs":[{"type":"uint256","name":"outA"},{"type":"uint256","name":"outB"}],"inputs":[{"type":"uint256","name":"amount"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function"},{"name":"__default__","outputs":[],"inputs":[],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":true,"type":"function"},{"name":"tokenToEthSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToEthTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToEthSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToEthTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"getEthToTokenInputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_sold"}],"constant":true,"payable":false,"type":"function"},{"name":"getEthToTokenOutputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"}],"constant":true,"payable":false,"type":"function"},{"name":"getTokenToEthInputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"}],"constant":true,"payable":false,"type":"function"},{"name":"getTokenToEthOutputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"}],"constant":true,"payable":false,"type":"function"},{"name":"tokenAddress","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"factoryAddress","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"balanceOf","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"}],"constant":true,"payable":false,"type":"function"},{"name":"transfer","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_to"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function"},{"name":"transferFrom","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function"},{"name":"approve","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_spender"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function"},{"name":"allowance","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"},{"type":"address","name":"_spender"}],"constant":true,"payable":false,"type":"function"},{"name":"name","outputs":[{"type":"bytes32","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"symbol","outputs":[{"type":"bytes32","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"decimals","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"totalSupply","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"}]')
        },
        166: function(e) {
            e.exports = JSON.parse('[{"name":"NewExchange","inputs":[{"type":"address","name":"token","indexed":true},{"type":"address","name":"exchange","indexed":true}],"anonymous":false,"type":"event"},{"name":"initializeFactory","outputs":[],"inputs":[{"type":"address","name":"template"}],"constant":false,"payable":false,"type":"function"},{"name":"createExchange","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"address","name":"token"}],"constant":false,"payable":false,"type":"function"},{"name":"getExchange","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"address","name":"token"}],"constant":true,"payable":false,"type":"function"},{"name":"getToken","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"address","name":"exchange"}],"constant":true,"payable":false,"type":"function"},{"name":"getTokenWithId","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"token_id"}],"constant":true,"payable":false,"type":"function"},{"name":"exchangeTemplate","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"tokenCount","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"}]')
        },
        200: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_factoryV1","type":"address"},{"internalType":"address","name":"_router","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')
        },
        201: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLastBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"name":"difficulty","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"name":"gaslimit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"name":"coinbase","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        234: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract ENS","name":"_old","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"label","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"resolver","type":"address"}],"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"NewTTL","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"old","outputs":[{"internalType":"contract ENS","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"recordExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"resolver","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"resolver","type":"address"}],"name":"setResolver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setSubnodeOwner","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setSubnodeRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setTTL","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"ttl","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        235: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract ENS","name":"_ens","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"contentType","type":"uint256"}],"name":"ABIChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"a","type":"address"}],"name":"AddrChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"coinType","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"newAddress","type":"bytes"}],"name":"AddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"target","type":"address"},{"indexed":false,"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"AuthorisationChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"hash","type":"bytes"}],"name":"ContenthashChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"record","type":"bytes"}],"name":"DNSRecordChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"}],"name":"DNSRecordDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"DNSZoneCleared","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"indexed":false,"internalType":"address","name":"implementer","type":"address"}],"name":"InterfaceChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"NameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"x","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"PubkeyChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"string","name":"indexedKey","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"}],"name":"TextChanged","type":"event"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentTypes","type":"uint256"}],"name":"ABI","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"addr","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"authorisations","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"clearDNSZone","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"contenthash","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"uint16","name":"resource","type":"uint16"}],"name":"dnsRecord","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"}],"name":"hasDNSRecords","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"interfaceImplementer","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"pubkey","outputs":[{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentType","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setABI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"coinType","type":"uint256"},{"internalType":"bytes","name":"a","type":"bytes"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"a","type":"address"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"target","type":"address"},{"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"setAuthorisation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"hash","type":"bytes"}],"name":"setContenthash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setDNSRecords","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"internalType":"address","name":"implementer","type":"address"}],"name":"setInterface","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"setPubkey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"setText","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"}],"name":"text","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        236: function(e) {
            e.exports = JSON.parse('[{"name":"Transfer","inputs":[{"type":"address","name":"_from","indexed":true},{"type":"address","name":"_to","indexed":true},{"type":"uint256","name":"_tokenId","indexed":true}],"anonymous":false,"type":"event"},{"name":"Approval","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_approved","indexed":true},{"type":"uint256","name":"_tokenId","indexed":true}],"anonymous":false,"type":"event"},{"name":"ApprovalForAll","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_operator","indexed":true},{"type":"bool","name":"_approved","indexed":false}],"anonymous":false,"type":"event"},{"outputs":[],"inputs":[],"constant":false,"payable":false,"type":"constructor"},{"name":"tokenURI","outputs":[{"type":"string","name":"out"}],"inputs":[{"type":"uint256","name":"_tokenId"}],"constant":true,"payable":false,"type":"function","gas":22405},{"name":"tokenByIndex","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"_index"}],"constant":true,"payable":false,"type":"function","gas":631},{"name":"tokenOfOwnerByIndex","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"},{"type":"uint256","name":"_index"}],"constant":true,"payable":false,"type":"function","gas":1248},{"name":"transferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function","gas":259486},{"name":"safeTransferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function"},{"name":"safeTransferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"},{"type":"bytes","name":"_data"}],"constant":false,"payable":false,"type":"function"},{"name":"approve","outputs":[],"inputs":[{"type":"address","name":"_approved"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function","gas":38422},{"name":"setApprovalForAll","outputs":[],"inputs":[{"type":"address","name":"_operator"},{"type":"bool","name":"_approved"}],"constant":false,"payable":false,"type":"function","gas":38016},{"name":"mint","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_to"}],"constant":false,"payable":false,"type":"function","gas":182636},{"name":"changeMinter","outputs":[],"inputs":[{"type":"address","name":"_minter"}],"constant":false,"payable":false,"type":"function","gas":35897},{"name":"changeURI","outputs":[],"inputs":[{"type":"address","name":"_newURI"}],"constant":false,"payable":false,"type":"function","gas":35927},{"name":"name","outputs":[{"type":"string","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":6612},{"name":"symbol","outputs":[{"type":"string","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":6642},{"name":"totalSupply","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":873},{"name":"minter","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":903},{"name":"socks","outputs":[{"type":"address","name":"out","unit":"Socks"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":933},{"name":"newURI","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":963},{"name":"ownerOf","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1126},{"name":"balanceOf","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1195},{"name":"getApproved","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1186},{"name":"isApprovedForAll","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"arg0"},{"type":"address","name":"arg1"}],"constant":true,"payable":false,"type":"function","gas":1415},{"name":"supportsInterface","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"bytes32","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1246}]')
        },
        237: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]')
        },
        313: function(e, n) {},
        413: function(e, n, t) {
            "use strict";
            t.r(n);
            var r = t(1),
                a = t(0),
                i = t.n(a),
                o = t(76),
                c = t.n(o),
                s = t(5),
                u = t(9),
                l = t(4);

            function d() {
                var e = Object(u.a)(["\n  body {\n    background-color: ", ";\n\n    img {\n      height: auto;\n      max-width: 100%;\n    }\n  }\n"]);
                return d = function() {
                    return e
                }, e
            }
            var p, b = Object(l.createGlobalStyle)(d(), (function(e) {
                    return e.theme.colors.background
                })),
                f = t(11),
                j = t(34),
                m = t(36),
                h = t(22),
                v = t(54),
                y = t(119),
                O = t(17),
                x = t(163),
                g = t(222),
                w = t(223),
                C = t(224),
                k = t(225),
                T = t(7),
                I = t.n(T),
                E = t(26),
                A = t(10),
                N = t(12),
                S = t(14),
                R = t(15),
                U = t(2),
                _ = t(229),
                P = (p = {}, Object(O.a)(p, U.a.MAINNET, void 0), Object(O.a)(p, U.a.BSCTESTNET, "Bsc-testnet"), p),
                B = function(e) {
                    Object(S.a)(r, e);
                    var n = Object(R.a)(r);

                    function r() {
                        return Object(A.a)(this, r), n.apply(this, arguments)
                    }
                    return Object(N.a)(r, [{
                        key: "activate",
                        value: function() {
                            var e = Object(E.a)(I.a.mark((function e() {
                                var n, r, a, i, o, c, s, u, l, d, p = this;
                                return I.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.fortmatic) {
                                                e.next = 11;
                                                break
                                            }
                                            return e.next = 3, t.e(1).then(t.t.bind(null, 421, 7));
                                        case 3:
                                            if (n = e.sent, r = n.default, i = (a = this).apiKey, !((o = a.chainId) in P)) {
                                                e.next = 10;
                                                break
                                            }
                                            this.fortmatic = new r(i, P[o]), e.next = 11;
                                            break;
                                        case 10:
                                            throw new Error("Unsupported network ID: ".concat(o));
                                        case 11:
                                            return c = this.fortmatic.getProvider(), s = new Promise((function(e) {
                                                var n = setInterval((function() {
                                                    c.overlayReady && (clearInterval(n), p.emit("OVERLAY_READY"), e())
                                                }), 200)
                                            })), e.next = 15, Promise.all([c.enable().then((function(e) {
                                                return e[0]
                                            })), s]);
                                        case 15:
                                            return u = e.sent, l = Object(f.a)(u, 1), d = l[0], e.abrupt("return", {
                                                provider: this.fortmatic.getProvider(),
                                                chainId: this.chainId,
                                                account: d
                                            });
                                        case 19:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]), r
                }(_.a),
                M = t(120),
                L = t(91),
                D = t(57),
                z = t(19),
                Y = function(e) {
                    Object(S.a)(t, e);
                    var n = Object(R.a)(t);

                    function t(e, r, a) {
                        var i;
                        return Object(A.a)(this, t), (i = n.call(this, e)).code = r, i.data = a, i
                    }
                    return t
                }(Object(L.a)(Error)),
                q = function e(n, t, r) {
                    var a = this;
                    Object(A.a)(this, e), this.isMetaMask = !1, this.chainId = void 0, this.url = void 0, this.host = void 0, this.path = void 0, this.batchWaitTimeMs = void 0, this.nextId = 1, this.batchTimeoutId = null, this.batch = [], this.clearBatch = Object(E.a)(I.a.mark((function e() {
                        var n, t, r, i, o, c, s, u, l, d, p, b, f, j;
                        return I.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return console.info("Clearing batch", a.batch), n = a.batch, a.batch = [], a.batchTimeoutId = null, e.prev = 4, e.next = 7, fetch(a.url, {
                                        method: "POST",
                                        headers: {
                                            "content-type": "application/json",
                                            accept: "application/json"
                                        },
                                        body: JSON.stringify(n.map((function(e) {
                                            return e.request
                                        })))
                                    });
                                case 7:
                                    t = e.sent, e.next = 14;
                                    break;
                                case 10:
                                    return e.prev = 10, e.t0 = e.catch(4), n.forEach((function(e) {
                                        return (0, e.reject)(new Error("Failed to send batch call"))
                                    })), e.abrupt("return");
                                case 14:
                                    if (t.ok) {
                                        e.next = 17;
                                        break
                                    }
                                    return n.forEach((function(e) {
                                        return (0, e.reject)(new Y("".concat(t.status, ": ").concat(t.statusText), -32e3))
                                    })), e.abrupt("return");
                                case 17:
                                    return e.prev = 17, e.next = 20, t.json();
                                case 20:
                                    r = e.sent, e.next = 27;
                                    break;
                                case 23:
                                    return e.prev = 23, e.t1 = e.catch(17), n.forEach((function(e) {
                                        return (0, e.reject)(new Error("Failed to parse JSON response"))
                                    })), e.abrupt("return");
                                case 27:
                                    i = n.reduce((function(e, n) {
                                        return e[n.request.id] = n, e
                                    }), {}), o = Object(M.a)(r);
                                    try {
                                        for (o.s(); !(c = o.n()).done;) s = c.value, u = i[s.id], l = u.resolve, d = u.reject, p = u.request.method, "error" in s ? d(new Y(null === s || void 0 === s || null === (b = s.error) || void 0 === b ? void 0 : b.message, null === s || void 0 === s || null === (f = s.error) || void 0 === f ? void 0 : f.code, null === s || void 0 === s || null === (j = s.error) || void 0 === j ? void 0 : j.data)) : "result" in s ? l(s.result) : d(new Y("Received unexpected JSON-RPC response to ".concat(p, " request."), -32e3, s))
                                    } catch (m) {
                                        o.e(m)
                                    } finally {
                                        o.f()
                                    }
                                    case 30:
                                    case "end":
                                        return e.stop()
                            }
                        }), e, null, [
                            [4, 10],
                            [17, 23]
                        ])
                    }))), this.sendAsync = function(e, n) {
                        a.request(e.method, e.params).then((function(t) {
                            return n(null, {
                                jsonrpc: "2.0",
                                id: e.id,
                                result: t
                            })
                        })).catch((function(e) {
                            return n(e, null)
                        }))
                    }, this.request = function() {
                        var e = Object(E.a)(I.a.mark((function e(n, t) {
                            var r, i;
                            return I.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("string" === typeof n) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", a.request(n.method, n.params));
                                    case 2:
                                        if ("eth_chainId" !== n) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return", "0x".concat(a.chainId.toString(16)));
                                    case 4:
                                        return i = new Promise((function(e, r) {
                                            a.batch.push({
                                                request: {
                                                    jsonrpc: "2.0",
                                                    id: a.nextId++,
                                                    method: n,
                                                    params: t
                                                },
                                                resolve: e,
                                                reject: r
                                            })
                                        })), a.batchTimeoutId = null !== (r = a.batchTimeoutId) && void 0 !== r ? r : setTimeout(a.clearBatch, a.batchWaitTimeMs), e.abrupt("return", i);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(n, t) {
                            return e.apply(this, arguments)
                        }
                    }(), this.chainId = n, this.url = t;
                    var i = new URL(t);
                    this.host = i.host, this.path = i.pathname, this.batchWaitTimeMs = null !== r && void 0 !== r ? r : 50
                },
                F = function(e) {
                    Object(S.a)(t, e);
                    var n = Object(R.a)(t);

                    function t(e) {
                        var r, a = e.urls,
                            i = e.defaultChainId;
                        return Object(A.a)(this, t), Object(z.a)(i || 1 === Object.keys(a).length, "defaultChainId is a required argument with >1 url"), (r = n.call(this, {
                            supportedChainIds: Object.keys(a).map((function(e) {
                                return Number(e)
                            }))
                        })).providers = void 0, r.currentChainId = void 0, r.currentChainId = i || Number(Object.keys(a)[0]), r.providers = Object.keys(a).reduce((function(e, n) {
                            return e[Number(n)] = new q(Number(n), a[Number(n)]), e
                        }), {}), r
                    }
                    return Object(N.a)(t, [{
                        key: "activate",
                        value: function() {
                            var e = Object(E.a)(I.a.mark((function e() {
                                return I.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", {
                                                provider: this.providers[this.currentChainId],
                                                chainId: this.currentChainId,
                                                account: null
                                            });
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getProvider",
                        value: function() {
                            var e = Object(E.a)(I.a.mark((function e() {
                                return I.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.providers[this.currentChainId]);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getChainId",
                        value: function() {
                            var e = Object(E.a)(I.a.mark((function e() {
                                return I.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.currentChainId);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getAccount",
                        value: function() {
                            var e = Object(E.a)(I.a.mark((function e() {
                                return I.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", null);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "deactivate",
                        value: function() {
                            return null
                        }
                    }, {
                        key: "provider",
                        get: function() {
                            return this.providers[this.currentChainId]
                        }
                    }]), t
                }(D.a),
                V = t(13),
                W = t(23),
                H = t(56);

            function Q(e) {
                return e.hasOwnProperty("result") ? e.result : e
            }
            var G = function(e) {
                    Object(S.a)(t, e);
                    var n = Object(R.a)(t);

                    function t() {
                        var e;
                        return Object(A.a)(this, t), (e = n.call(this)).name = e.constructor.name, e.message = "No BSC provider was found on window.BinanceChain.", e
                    }
                    return t
                }(Object(L.a)(Error)),
                K = function(e) {
                    Object(S.a)(t, e);
                    var n = Object(R.a)(t);

                    function t() {
                        var e;
                        return Object(A.a)(this, t), (e = n.call(this)).name = e.constructor.name, e.message = "The user rejected the request.", e
                    }
                    return t
                }(Object(L.a)(Error)),
                J = function(e) {
                    Object(S.a)(t, e);
                    var n = Object(R.a)(t);

                    function t(e) {
                        var r;
                        return Object(A.a)(this, t), (r = n.call(this, e)).handleNetworkChanged = r.handleNetworkChanged.bind(Object(W.a)(r)), r.handleChainChanged = r.handleChainChanged.bind(Object(W.a)(r)), r.handleAccountsChanged = r.handleAccountsChanged.bind(Object(W.a)(r)), r.handleClose = r.handleClose.bind(Object(W.a)(r)), r
                    }
                    return Object(N.a)(t, [{
                        key: "handleChainChanged",
                        value: function(e) {
                            this.emitUpdate({
                                chainId: e,
                                provider: window.BinanceChain
                            })
                        }
                    }, {
                        key: "handleAccountsChanged",
                        value: function(e) {
                            0 === e.length ? this.emitDeactivate() : this.emitUpdate({
                                account: e[0]
                            })
                        }
                    }, {
                        key: "handleClose",
                        value: function() {
                            this.emitDeactivate()
                        }
                    }, {
                        key: "handleNetworkChanged",
                        value: function(e) {
                            this.emitUpdate({
                                chainId: e,
                                provider: window.BinanceChain
                            })
                        }
                    }, {
                        key: "activate",
                        value: function() {
                            var e = Object(E.a)(I.a.mark((function e() {
                                var n;
                                return I.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (window.BinanceChain) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new G;
                                        case 2:
                                            return window.BinanceChain.on && (window.BinanceChain.on("chainChanged", this.handleChainChanged), window.BinanceChain.on("accountsChanged", this.handleAccountsChanged), window.BinanceChain.on("close", this.handleClose), window.BinanceChain.on("networkChanged", this.handleNetworkChanged)), window.BinanceChain.isMetaMask && (window.BinanceChain.autoRefreshOnNetworkChange = !1), e.prev = 4, e.next = 7, window.BinanceChain.send("eth_requestAccounts").then((function(e) {
                                                return Q(e)[0]
                                            }));
                                        case 7:
                                            n = e.sent, e.next = 15;
                                            break;
                                        case 10:
                                            if (e.prev = 10, e.t0 = e.catch(4), 4001 !== e.t0.code) {
                                                e.next = 14;
                                                break
                                            }
                                            throw new K;
                                        case 14:
                                            Object(H.a)(!1, "eth_requestAccounts was unsuccessful, falling back to enable");
                                        case 15:
                                            if (n) {
                                                e.next = 19;
                                                break
                                            }
                                            return e.next = 18, window.BinanceChain.enable().then((function(e) {
                                                return e && Q(e)[0]
                                            }));
                                        case 18:
                                            n = e.sent;
                                        case 19:
                                            return e.abrupt("return", Object(V.a)({
                                                provider: window.BinanceChain
                                            }, n ? {
                                                account: n
                                            } : {}));
                                        case 20:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [4, 10]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getProvider",
                        value: function() {
                            var e = Object(E.a)(I.a.mark((function e() {
                                return I.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", window.BinanceChain);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getChainId",
                        value: function() {
                            var e = Object(E.a)(I.a.mark((function e() {
                                var n;
                                return I.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (window.BinanceChain) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new G;
                                        case 2:
                                            return e.prev = 2, e.next = 5, window.BinanceChain.send("eth_chainId").then(Q);
                                        case 5:
                                            n = e.sent, e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(2), Object(H.a)(!1, "eth_chainId was unsuccessful, falling back to net_version");
                                        case 11:
                                            if (n) {
                                                e.next = 21;
                                                break
                                            }
                                            return e.prev = 12, e.next = 15, window.BinanceChain.send("net_version").then(Q);
                                        case 15:
                                            n = e.sent, e.next = 21;
                                            break;
                                        case 18:
                                            e.prev = 18, e.t1 = e.catch(12), Object(H.a)(!1, "net_version was unsuccessful, falling back to net version v2");
                                        case 21:
                                            if (!n) try {
                                                n = Q(window.BinanceChain.send({
                                                    method: "net_version"
                                                }))
                                            } catch (t) {
                                                Object(H.a)(!1, "net_version v2 was unsuccessful, falling back to manual matches and static properties")
                                            }
                                            return n || (n = window.BinanceChain.isDapper ? Q(window.BinanceChain.cachedResults.net_version) : window.BinanceChain.chainId || window.BinanceChain.netVersion || window.BinanceChain.networkVersion || window.BinanceChain._chainId), e.abrupt("return", n);
                                        case 24:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 8],
                                    [12, 18]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getAccount",
                        value: function() {
                            var e = Object(E.a)(I.a.mark((function e() {
                                var n;
                                return I.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (window.BinanceChain) {
                                                e.next = 2;
                                                break
                                            }
                                            throw new G;
                                        case 2:
                                            return e.prev = 2, e.next = 5, window.BinanceChain.send("eth_accounts").then((function(e) {
                                                return Q(e)[0]
                                            }));
                                        case 5:
                                            n = e.sent, e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(2), Object(H.a)(!1, "eth_accounts was unsuccessful, falling back to enable");
                                        case 11:
                                            if (n) {
                                                e.next = 21;
                                                break
                                            }
                                            return e.prev = 12, e.next = 15, window.BinanceChain.enable().then((function(e) {
                                                return Q(e)[0]
                                            }));
                                        case 15:
                                            n = e.sent, e.next = 21;
                                            break;
                                        case 18:
                                            e.prev = 18, e.t1 = e.catch(12), Object(H.a)(!1, "enable was unsuccessful, falling back to eth_accounts v2");
                                        case 21:
                                            return n || (n = Q(window.BinanceChain.send({
                                                method: "eth_accounts"
                                            }))[0]), e.abrupt("return", n);
                                        case 23:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 8],
                                    [12, 18]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "deactivate",
                        value: function() {
                            window.BinanceChain && window.BinanceChain.removeListener && (window.BinanceChain.removeListener("chainChanged", this.handleChainChanged), window.BinanceChain.removeListener("accountsChanged", this.handleAccountsChanged), window.BinanceChain.removeListener("close", this.handleClose), window.BinanceChain.removeListener("networkChanged", this.handleNetworkChanged))
                        }
                    }, {
                        key: "isAuthorized",
                        value: function() {
                            var e = Object(E.a)(I.a.mark((function e() {
                                return I.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (window.BinanceChain) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return", !1);
                                        case 2:
                                            return e.prev = 2, e.next = 5, window.BinanceChain.send("eth_accounts").then((function(e) {
                                                return Q(e).length > 0
                                            }));
                                        case 5:
                                            return e.abrupt("return", e.sent);
                                        case 8:
                                            return e.prev = 8, e.t0 = e.catch(2), e.abrupt("return", !1);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 8]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]), t
                }(D.a),
                X = "https://bsc-dataseed1.defibit.io",
                Z = Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: ".",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                    REACT_APP_NETWORK_URL: "https://bsc-dataseed1.defibit.io",
                    REACT_APP_CHAIN_ID: "56",
                    REACT_APP_GTAG: "GTM-TLF66T4"
                }).REACT_APP_FORTMATIC_KEY,
                $ = Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: ".",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                    REACT_APP_NETWORK_URL: "https://bsc-dataseed1.defibit.io",
                    REACT_APP_CHAIN_ID: "56",
                    REACT_APP_GTAG: "GTM-TLF66T4"
                }).REACT_APP_PORTIS_ID,
                ee = parseInt(null !== "56" ? "56" : "1");
            var ne, te = new F({
                urls: Object(O.a)({}, ee, X)
            });
            var re, ae = new g.a({
                    supportedChainIds: [56, 97]
                }),
                ie = new J({
                    supportedChainIds: [56]
                }),
                oe = new w.a({
                    rpc: {
                        1: X
                    },
                    bridge: "https://bridge.walletconnect.org",
                    qrcode: !0,
                    pollingInterval: 15e3
                }),
                ce = (new B({
                    apiKey: null !== Z && void 0 !== Z ? Z : "",
                    chainId: 1
                }), new k.a({
                    dAppId: null !== $ && void 0 !== $ ? $ : "",
                    networks: [1]
                }), new C.a({
                    url: X,
                    appName: "Uniswap",
                    appLogoUrl: "https://mpng.pngfly.com/20181202/bex/kisspng-emoji-domain-unicorn-pin-badges-sticker-unicorn-tumblr-emoji-unicorn-iphoneemoji-5c046729264a77.5671679315437924251569.jpg"
                }), t(27)),
                se = "0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F",
                ue = new U.l(U.a.MAINNET, "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3", 18, "DAI", "Dai Stablecoin"),
                le = new U.l(U.a.MAINNET, "0xe9e7cea3dedca5984780bafc599bd69add087d56", 18, "BUSD", "Binance USD"),
                de = new U.l(U.a.MAINNET, "0x55d398326f99059ff775485246999027b3197955", 18, "USDT", "Tether USD"),
                pe = new U.l(U.a.MAINNET, "0x56b6fb708fc5732dec1afc8d8556423a2edccbd6", 18, "EOS", "EOS Token"),
                be = new U.l(U.a.MAINNET, "0x7083609fce4d1d8dc0c979aab8c869ea2c873402", 18, "DOT", "Polkadot Token"),
                fe = new U.l(U.a.MAINNET, "0x2170ed0880ac9a755fd29b2688956bd959f933f8", 18, "ETH", "Ethereum Token"),
                je = (re = {}, Object(O.a)(re, U.a.MAINNET, [U.p[U.a.MAINNET]]), Object(O.a)(re, U.a.BSCTESTNET, [U.p[U.a.BSCTESTNET]]), re),
                me = Object(V.a)(Object(V.a)({}, je), {}, Object(O.a)({}, U.a.MAINNET, [].concat(Object(ce.a)(je[U.a.MAINNET]), [ue, le, de, pe, be]))),
                he = Object(O.a)({}, U.a.MAINNET, Object(O.a)({}, fe.address, [ue, U.p[U.a.MAINNET]])),
                ve = Object(V.a)(Object(V.a)({}, je), {}, Object(O.a)({}, U.a.MAINNET, [].concat(Object(ce.a)(je[U.a.MAINNET]), [ue, le, de]))),
                ye = Object(V.a)(Object(V.a)({}, je), {}, Object(O.a)({}, U.a.MAINNET, [].concat(Object(ce.a)(je[U.a.MAINNET]), [ue, le, de]))),
                Oe = Object(O.a)({}, U.a.MAINNET, [
                    [new U.l(U.a.MAINNET, "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82", 18, "CAKE", "PancakeSwap Token"), new U.l(U.a.MAINNET, "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", 18, "WBNB", "Wrapped BNB")],
                    [le, de],
                    [ue, de]
                ]),
                xe = "NETWORK",
                ge = 80,
                we = 1200,
                Ce = new U.h(U.f.BigInt(1), U.f.BigInt(1e4)),
                ke = U.f.BigInt(1e4),
                Te = new U.h(U.f.BigInt(100), ke),
                Ie = new U.h(U.f.BigInt(300), ke),
                Ee = new U.h(U.f.BigInt(500), ke),
                Ae = new U.h(U.f.BigInt(1e3), ke),
                Ne = new U.h(U.f.BigInt(1500), ke),
                Se = U.f.exponentiate(U.f.BigInt(10), U.f.BigInt(16)),
                Re = new U.h(U.f.BigInt(75), U.f.BigInt(1e4));

            function Ue() {
                var e = Object(v.c)(),
                    n = Object(v.c)(xe);
                return e.active ? e : n
            }
            var _e = t(21),
                Pe = Object(_e.b)("app/updateBlockNumber"),
                Be = Object(_e.b)("app/toggleWalletModal"),
                Me = Object(_e.b)("app/toggleSettingsMenu"),
                Le = Object(_e.b)("app/addPopup"),
                De = Object(_e.b)("app/removePopup");

            function ze() {
                var e = Ue().chainId;
                return Object(h.d)((function(n) {
                    return n.application.blockNumber[null !== e && void 0 !== e ? e : -1]
                }))
            }

            function Ye() {
                var e = Object(h.c)();
                return Object(a.useCallback)((function(n) {
                    e(De({
                        key: n
                    }))
                }), [e])
            }

            function qe() {
                var e = Object(u.a)(["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ", ";\n  justify-items: ", ";\n"]);
                return qe = function() {
                    return e
                }, e
            }

            function Fe() {
                var e = Object(u.a)(["\n  width: 100%;\n  align-items: center;\n"]);
                return Fe = function() {
                    return e
                }, e
            }

            function Ve() {
                var e = Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]);
                return Ve = function() {
                    return e
                }, e
            }
            var We = l.default.div(Ve()),
                He = Object(l.default)(We)(Fe()),
                Qe = l.default.div(qe(), (function(e) {
                    var n = e.gap;
                    return ("sm" === n ? "8px" : "md" === n && "12px") || "lg" === n && "24px" || n
                }), (function(e) {
                    var n = e.justify;
                    return n && n
                })),
                Ge = We,
                Ke = t(429),
                Je = t(90),
                Xe = t(63),
                Ze = {
                    pending: Object(_e.b)("lists/fetchTokenList/pending"),
                    fulfilled: Object(_e.b)("lists/fetchTokenList/fulfilled"),
                    rejected: Object(_e.b)("lists/fetchTokenList/rejected")
                },
                $e = Object(_e.b)("lists/acceptListUpdate"),
                en = Object(_e.b)("lists/addList"),
                nn = Object(_e.b)("lists/removeList"),
                tn = Object(_e.b)("lists/selectList"),
                rn = (Object(_e.b)("lists/rejectVersionUpdate"), t(50)),
                an = t(40),
                on = t(430);

            function cn() {
                var e = Object(u.a)(["\n  color: ", ";\n"]);
                return cn = function() {
                    return e
                }, e
            }

            function sn() {
                var e = Object(u.a)(["\n  animation: 2s ", " linear infinite;\n  width: 16px;\n  height: 16px;\n"]);
                return sn = function() {
                    return e
                }, e
            }

            function un() {
                var e = Object(u.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);
                return un = function() {
                    return e
                }, e
            }

            function ln() {
                var e = Object(u.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"]);
                return ln = function() {
                    return e
                }, e
            }

            function dn() {
                var e = Object(u.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"]);
                return dn = function() {
                    return e
                }, e
            }

            function pn() {
                var e = Object(u.a)(["\n  border: none;\n  text-decoration: none;\n  background: none;\n\n  cursor: ", ";\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: ", ";\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: ", ";\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"]);
                return pn = function() {
                    return e
                }, e
            }

            function bn() {
                var e = Object(u.a)(["\n  cursor: pointer;\n"]);
                return bn = function() {
                    return e
                }, e
            }

            function fn() {
                var e = Object(u.a)(["\n  padding: 1rem 2rem 1rem 2rem;\n  border-radius: 3rem;\n  cursor: pointer;\n  user-select: none;\n  font-size: 1rem;\n  border: none;\n  outline: none;\n  background-color: ", ";\n  #FFFFFFwidth: 100%;\n\n  :hover,\n  :focus {\n    background-color: ", ";\n  }\n\n  :active {\n    background-color: ", ";\n  }\n\n  :disabled {\n    background-color: ", ";\n    color: ", ";\n    cursor: auto;\n  }\n"]);
                return fn = function() {
                    return e
                }, e
            }
            l.default.button.attrs((function(e) {
                var n = e.warning,
                    t = e.theme;
                return {
                    backgroundColor: n ? t.colors.failure : t.colors.primary
                }
            }))(fn(), (function(e) {
                return e.backgroundColor
            }), (function(e) {
                var n = e.backgroundColor;
                return Object(an.a)(.05, n)
            }), (function(e) {
                var n = e.backgroundColor;
                return Object(an.a)(.1, n)
            }), (function(e) {
                return e.theme.colors.invertedContrast
            }), (function(e) {
                return e.theme.colors.textDisabled
            }));
            var jn = Object(l.default)(Ke.a)(bn()),
                mn = l.default.button(pn(), (function(e) {
                    return e.disabled ? "default" : "pointer"
                }), (function(e) {
                    var n = e.theme;
                    return e.disabled ? n.colors.textSubtle : n.colors.primary
                }), (function(e) {
                    return e.disabled ? null : "underline"
                }), (function(e) {
                    return e.disabled ? null : "underline"
                })),
                hn = Object(l.default)(j.b)(dn(), (function(e) {
                    return e.theme.colors.primary
                })),
                vn = l.default.a(ln(), (function(e) {
                    return e.theme.colors.primary
                }));

            function yn(e) {
                var n = e.target,
                    t = void 0 === n ? "_blank" : n,
                    i = e.href,
                    o = e.rel,
                    c = void 0 === o ? "noopener noreferrer" : o,
                    s = Object(rn.a)(e, ["target", "href", "rel"]),
                    u = Object(a.useCallback)((function(e) {
                        "_blank" === t || e.ctrlKey || e.metaKey || e.preventDefault()
                    }), [t]);
                return Object(r.jsx)(vn, Object(V.a)({
                    target: t,
                    rel: c,
                    href: i,
                    onClick: u
                }, s))
            }
            var On = Object(l.keyframes)(un()),
                xn = l.default.img(sn(), On),
                gn = Object(l.default)(hn)(cn(), (function(e) {
                    return e.theme.colors.text
                }));

            function wn(e) {
                var n = e.to;
                return Object(r.jsx)(gn, {
                    to: n,
                    children: Object(r.jsx)(on.a, {})
                })
            }
            var Cn = {
                main: function(e) {
                    return Object(r.jsx)(s.v, Object(V.a)({}, e))
                },
                link: function(e) {
                    return Object(r.jsx)(s.v, Object(V.a)({}, e))
                },
                black: function(e) {
                    return Object(r.jsx)(s.v, Object(V.a)({}, e))
                },
                body: function(e) {
                    return Object(r.jsx)(s.v, Object(V.a)({}, e))
                },
                largeHeader: function(e) {
                    return Object(r.jsx)(s.v, Object(V.a)({
                        bold: !0,
                        fontSize: "24px"
                    }, e))
                },
                mediumHeader: function(e) {
                    return Object(r.jsx)(s.v, Object(V.a)({
                        bold: !0,
                        fontSize: "20px"
                    }, e))
                },
                subHeader: function(e) {
                    return Object(r.jsx)(s.v, Object(V.a)({
                        fontSize: "14px"
                    }, e))
                },
                blue: function(e) {
                    return Object(r.jsx)(s.v, Object(V.a)({}, e))
                },
                darkGray: function(e) {
                    return Object(r.jsx)(s.v, Object(V.a)({}, e))
                },
                italic: function(e) {
                    return Object(r.jsx)(s.v, Object(V.a)({
                        fontSize: "12px",
                        style: {
                            fontStyle: "italic"
                        }
                    }, e))
                },
                error: function(e) {
                    return Object(r.jsx)(s.v, Object(V.a)({
                        color: "failure"
                    }, e))
                }
            };

            function kn(e) {
                return "v".concat(e.major, ".").concat(e.minor, ".").concat(e.patch)
            }
            var Tn = t(230);

            function In() {
                var e = Object(u.a)(["\n  width: fit-content;\n  margin: ", ";\n"]);
                return In = function() {
                    return e
                }, e
            }

            function En() {
                var e = Object(u.a)(["\n  flex-wrap: wrap;\n  margin: ", ";\n  justify-content: ", ";\n\n  & > * {\n    margin: ", " !important;\n  }\n"]);
                return En = function() {
                    return e
                }, e
            }

            function An() {
                var e = Object(u.a)(["\n  display: flex;\n  align-items: flex-end;\n"]);
                return An = function() {
                    return e
                }, e
            }

            function Nn() {
                var e = Object(u.a)(["\n  justify-content: space-between;\n"]);
                return Nn = function() {
                    return e
                }, e
            }

            function Sn() {
                var e = Object(u.a)(["\n  width: 100%;\n  display: flex;\n  padding: 0;\n  align-items: ", ";\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n"]);
                return Sn = function() {
                    return e
                }, e
            }
            var Rn = Object(l.default)(Tn.Box)(Sn(), (function(e) {
                    return e.align || "center"
                }), (function(e) {
                    return e.padding
                }), (function(e) {
                    return e.border
                }), (function(e) {
                    return e.borderRadius
                })),
                Un = Object(l.default)(Rn)(Nn()),
                _n = l.default.div(An()),
                Pn = Object(l.default)(Rn)(En(), (function(e) {
                    var n = e.gap;
                    return n && "-".concat(n)
                }), (function(e) {
                    var n = e.justify;
                    return n && n
                }), (function(e) {
                    return e.gap
                })),
                Bn = Object(l.default)(Rn)(In(), (function(e) {
                    var n = e.gap;
                    return n && "-".concat(n)
                })),
                Mn = Rn,
                Ln = Cn.body;

            function Dn(e) {
                var n = e.popKey,
                    t = e.listUrl,
                    o = e.oldList,
                    c = e.newList,
                    u = e.auto,
                    l = Ye(),
                    d = Object(a.useCallback)((function() {
                        return l(n)
                    }), [n, l]),
                    p = Object(h.c)(),
                    b = Object(a.useCallback)((function() {
                        u || (p($e(t)), d())
                    }), [u, p, t, d]),
                    f = Object(a.useMemo)((function() {
                        return Object(Xe.b)(o.tokens, c.tokens)
                    }), [c.tokens, o.tokens]),
                    j = f.added,
                    m = f.changed,
                    v = f.removed,
                    y = Object(a.useMemo)((function() {
                        return Object.keys(m).reduce((function(e, n) {
                            return e + Object.keys(m[n]).length
                        }), 0)
                    }), [m]);
                return Object(r.jsx)(Pn, {
                    children: Object(r.jsx)(Qe, {
                        style: {
                            flex: "1"
                        },
                        gap: "8px",
                        children: u ? Object(r.jsxs)(Ln, {
                            fontWeight: 500,
                            children: ['The token list "', o.name, '" has been updated to', " ", Object(r.jsx)("strong", {
                                children: kn(c.version)
                            }), "."]
                        }) : Object(r.jsxs)(r.Fragment, {
                            children: [Object(r.jsxs)("div", {
                                children: [Object(r.jsxs)(s.v, {
                                    fontSize: "14px",
                                    children: ['An update is available for the token list "', o.name, '" (', kn(o.version), " to ", kn(c.version), ")."]
                                }), Object(r.jsxs)("ul", {
                                    children: [j.length > 0 ? Object(r.jsxs)("li", {
                                        children: [j.map((function(e, n) {
                                            return Object(r.jsxs)(i.a.Fragment, {
                                                children: [Object(r.jsx)("strong", {
                                                    title: e.address,
                                                    children: e.symbol
                                                }), n === j.length - 1 ? null : ", "]
                                            }, "".concat(e.chainId, "-").concat(e.address))
                                        })), " ", "added"]
                                    }) : null, v.length > 0 ? Object(r.jsxs)("li", {
                                        children: [v.map((function(e, n) {
                                            return Object(r.jsxs)(i.a.Fragment, {
                                                children: [Object(r.jsx)("strong", {
                                                    title: e.address,
                                                    children: e.symbol
                                                }), n === v.length - 1 ? null : ", "]
                                            }, "".concat(e.chainId, "-").concat(e.address))
                                        })), " ", "removed"]
                                    }) : null, y > 0 ? Object(r.jsxs)("li", {
                                        children: [y, " tokens updated"]
                                    }) : null]
                                })]
                            }), Object(r.jsxs)(Pn, {
                                children: [Object(r.jsx)("div", {
                                    style: {
                                        flexGrow: 1,
                                        marginRight: 12
                                    },
                                    children: Object(r.jsx)(s.c, {
                                        onClick: b,
                                        children: "Accept update"
                                    })
                                }), Object(r.jsx)("div", {
                                    style: {
                                        flexGrow: 1
                                    },
                                    children: Object(r.jsx)(s.c, {
                                        onClick: d,
                                        children: "Dismiss"
                                    })
                                })]
                            })]
                        })
                    })
                })
            }
            var zn = t(431),
                Yn = t(432),
                qn = t(92),
                Fn = t(30),
                Vn = t(416),
                Wn = t(24),
                Hn = t(231);

            function Qn(e) {
                try {
                    return Object(Fn.getAddress)(e)
                } catch (n) {
                    return !1
                }
            }
            var Gn = {
                56: "",
                97: "Bsc-testnet"
            };

            function Kn(e, n, t) {
                var r = "https://".concat(Gn[e] || Gn[56], "bscscan.com");
                switch (t) {
                    case "transaction":
                        return "".concat(r, "/tx/").concat(n);
                    case "token":
                        return "".concat(r, "/token/").concat(n);
                    case "address":
                    default:
                        return "".concat(r, "/address/").concat(n)
                }
            }

            function Jn(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
                    t = Qn(e);
                if (!t) throw Error("Invalid 'address' parameter '".concat(e, "'."));
                return "".concat(t.substring(0, n + 2), "...").concat(t.substring(42 - n))
            }

            function Xn(e) {
                return e.mul(Wn.a.from(1e4).add(Wn.a.from(1e3))).div(Wn.a.from(1e4))
            }

            function Zn(e, n) {
                if (n < 0 || n > 1e4) throw Error("Unexpected slippage value: ".concat(n));
                return [U.f.divide(U.f.multiply(e.raw, U.f.BigInt(1e4 - n)), U.f.BigInt(1e4)), U.f.divide(U.f.multiply(e.raw, U.f.BigInt(1e4 + n)), U.f.BigInt(1e4))]
            }

            function $n(e, n, t, r) {
                if (!Qn(e) || e === Vn.a) throw Error("Invalid 'address' parameter '".concat(e, "'."));
                return new qn.a(e, n, function(e, n) {
                    return n ? function(e, n) {
                        return e.getSigner(n).connectUnchecked()
                    }(e, n) : e
                }(t, r))
            }

            function et(e, n, t) {
                return $n(se, Hn.a, n, t)
            }

            function nt(e, n) {
                var t;
                return n === U.d || Boolean(n instanceof U.l && (null === (t = e[n.chainId]) || void 0 === t ? void 0 : t[n.address]))
            }

            function tt() {
                var e = Object(u.a)(["\n  flex-wrap: nowrap;\n"]);
                return tt = function() {
                    return e
                }, e
            }
            var rt = Cn.body,
                at = Object(l.default)(Pn)(tt());

            function it(e) {
                var n = e.hash,
                    t = e.success,
                    i = e.summary,
                    o = Ue().chainId,
                    c = Object(a.useContext)(l.ThemeContext);
                return Object(r.jsxs)(at, {
                    children: [Object(r.jsx)("div", {
                        style: {
                            paddingRight: 16
                        },
                        children: t ? Object(r.jsx)(zn.a, {
                            color: c.colors.success,
                            size: 24
                        }) : Object(r.jsx)(Yn.a, {
                            color: c.colors.failure,
                            size: 24
                        })
                    }), Object(r.jsxs)(Qe, {
                        gap: "8px",
                        children: [Object(r.jsx)(rt, {
                            fontWeight: 500,
                            children: null !== i && void 0 !== i ? i : "Hash: ".concat(n.slice(0, 8), "...").concat(n.slice(58, 65))
                        }), o && Object(r.jsx)(yn, {
                            href: Kn(o, n, "transaction"),
                            children: "View on bscscan"
                        })]
                    })]
                })
            }

            function ot() {
                var e = Object(u.a)(["\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 2px;\n  background-color: ", ";\n"]);
                return ot = function() {
                    return e
                }, e
            }

            function ct() {
                var e = Object(u.a)(["\n  display: inline-block;\n  width: 100%;\n  padding: 1em;\n  background-color: ", ";\n  position: relative;\n  border-radius: 10px;\n  padding: 20px;\n  padding-right: 35px;\n  overflow: hidden;\n\n  ", " {\n    min-width: 290px;\n  }\n"]);
                return ct = function() {
                    return e
                }, e
            }

            function st() {
                var e = Object(u.a)(["\n  position: absolute;\n  right: 10px;\n  top: 10px;\n\n  :hover {\n    cursor: pointer;\n  }\n"]);
                return st = function() {
                    return e
                }, e
            }
            var ut = Object(l.default)(Ke.a)(st()),
                lt = l.default.div(ct(), (function(e) {
                    return e.theme.colors.invertedContrast
                }), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                dt = l.default.div(ot(), (function(e) {
                    return e.theme.colors.tertiary
                })),
                pt = Object(Je.a)(dt);

            function bt(e) {
                var n = e.removeAfterMs,
                    t = e.content,
                    i = e.popKey,
                    o = Ye(),
                    c = Object(a.useCallback)((function() {
                        return o(i)
                    }), [i, o]);
                Object(a.useEffect)((function() {
                    if (null !== n) {
                        var e = setTimeout((function() {
                            c()
                        }), n);
                        return function() {
                            clearTimeout(e)
                        }
                    }
                }), [n, c]);
                var s, u = Object(a.useContext)(l.ThemeContext);
                if ("txn" in t) {
                    var d = t.txn,
                        p = d.hash,
                        b = d.success,
                        f = d.summary;
                    s = Object(r.jsx)(it, {
                        hash: p,
                        success: b,
                        summary: f
                    })
                } else if ("listUpdate" in t) {
                    var j = t.listUpdate,
                        m = j.listUrl,
                        h = j.oldList,
                        v = j.newList,
                        y = j.auto;
                    s = Object(r.jsx)(Dn, {
                        popKey: i,
                        listUrl: m,
                        oldList: h,
                        newList: v,
                        auto: y
                    })
                }
                var O = Object(Je.b)({
                    from: {
                        width: "100%"
                    },
                    to: {
                        width: "0%"
                    },
                    config: {
                        duration: null !== n && void 0 !== n ? n : void 0
                    }
                });
                return Object(r.jsxs)(lt, {
                    children: [Object(r.jsx)(ut, {
                        color: u.colors.textSubtle,
                        onClick: c
                    }), s, null !== n ? Object(r.jsx)(pt, {
                        style: O
                    }) : null]
                })
            }

            function ft() {
                var e = Object(u.a)(["\n  position: fixed;\n  top: 64px;\n  right: 1rem;\n  max-width: 355px !important;\n  width: 100%;\n  z-index: 2;\n\n  ", " {\n    display: none;\n  }\n"]);
                return ft = function() {
                    return e
                }, e
            }

            function jt() {
                var e = Object(u.a)(["\n  height: 99%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: row;\n  -webkit-overflow-scrolling: touch;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n"]);
                return jt = function() {
                    return e
                }, e
            }

            function mt() {
                var e = Object(u.a)(["\n  position: relative;\n  max-width: 100%;\n  height: ", ";\n  margin: ", ";\n  margin-bottom: ", "};\n  display: none;\n\n  ", " {\n    display: block;\n  }\n"]);
                return mt = function() {
                    return e
                }, e
            }
            var ht = l.default.div(mt(), (function(e) {
                    return e.height
                }), (function(e) {
                    return e.height ? "0 auto;" : 0
                }), (function(e) {
                    return e.height ? "20px" : 0
                }), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                vt = l.default.div(jt()),
                yt = Object(l.default)(Qe)(ft(), (function(e) {
                    return e.theme.mediaQueries.sm
                }));

            function Ot() {
                var e = function() {
                    var e = Object(h.d)((function(e) {
                        return e.application.popupList
                    }));
                    return Object(a.useMemo)((function() {
                        return e.filter((function(e) {
                            return e.show
                        }))
                    }), [e])
                }();
                return Object(r.jsxs)(r.Fragment, {
                    children: [Object(r.jsx)(yt, {
                        gap: "20px",
                        children: e.map((function(e) {
                            return Object(r.jsx)(bt, {
                                content: e.content,
                                popKey: e.key,
                                removeAfterMs: e.removeAfterMs
                            }, e.key)
                        }))
                    }), Object(r.jsx)(ht, {
                        height: (null === e || void 0 === e ? void 0 : e.length) > 0 ? "fit-content" : 0,
                        children: Object(r.jsx)(vt, {
                            children: e.slice(0).reverse().map((function(e) {
                                return Object(r.jsx)(bt, {
                                    content: e.content,
                                    popKey: e.key,
                                    removeAfterMs: e.removeAfterMs
                                }, e.key)
                            }))
                        })
                    })]
                })
            }
            var xt = t(105);

            function gt() {
                var e = Object(u.a)(["\n  animation: 2s ", " linear infinite;\n  height: ", ";\n  width: ", ";\n  path {\n    stroke: ", ";\n  }\n"]);
                return gt = function() {
                    return e
                }, e
            }

            function wt() {
                var e = Object(u.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);
                return wt = function() {
                    return e
                }, e
            }
            var Ct = Object(l.keyframes)(wt()),
                kt = l.default.svg(gt(), Ct, (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                }), (function(e) {
                    var n = e.stroke,
                        t = e.theme;
                    return null !== n && void 0 !== n ? n : t.colors.primary
                }));

            function Tt(e) {
                var n = e.size,
                    t = void 0 === n ? "16px" : n,
                    a = e.stroke,
                    i = Object(rn.a)(e, ["size", "stroke"]);
                return Object(r.jsx)(kt, Object(V.a)(Object(V.a)({
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    size: t,
                    stroke: a
                }, i), {}, {
                    children: Object(r.jsx)("path", {
                        d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                }))
            }

            function It() {
                var e = Object(u.a)(["\n  color: ", ";\n"]);
                return It = function() {
                    return e
                }, e
            }

            function Et() {
                var e = Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 20rem;\n"]);
                return Et = function() {
                    return e
                }, e
            }
            var At = l.default.div(Et()),
                Nt = l.default.h2(It(), (function(e) {
                    return e.theme.colors.primaryDark
                }));

            function St(e) {
                var n = e.children,
                    t = Object(xt.b)().t,
                    i = Object(v.c)().active,
                    o = Object(v.c)(xe),
                    c = o.active,
                    s = o.error,
                    u = o.activate,
                    l = function() {
                        var e = Object(v.c)(),
                            n = e.activate,
                            t = e.active,
                            r = Object(a.useState)(!1),
                            i = Object(f.a)(r, 2),
                            o = i[0],
                            c = i[1];
                        return Object(a.useEffect)((function() {
                            ae.isAuthorized().then((function(e) {
                                var t = window.localStorage.getItem("accountStatus");
                                e && t || y.isMobile && window.ethereum && t ? n(ae, void 0, !0).catch((function() {
                                    c(!0)
                                })) : c(!0)
                            }))
                        }), [n]), Object(a.useEffect)((function() {
                            t && c(!0)
                        }), [t]), o
                    }();
                Object(a.useEffect)((function() {
                        !l || c || s || i || u(te)
                    }), [l, c, s, u, i]),
                    function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            n = Object(v.c)(),
                            t = n.active,
                            r = n.error,
                            i = n.activate;
                        Object(a.useEffect)((function() {
                            var n = window.ethereum;
                            if (n && n.on && !t && !r && !e) {
                                var a = function() {
                                        i(ae, void 0, !0).catch((function(e) {
                                            console.error("Failed to activate after chain changed", e)
                                        }))
                                    },
                                    o = function(e) {
                                        e.length > 0 && i(ae, void 0, !0).catch((function(e) {
                                            console.error("Failed to activate after accounts changed", e)
                                        }))
                                    };
                                return n.on("chainChanged", a), n.on("accountsChanged", o),
                                    function() {
                                        n.removeListener && (n.removeListener("chainChanged", a), n.removeListener("accountsChanged", o))
                                    }
                            }
                        }), [t, r, e, i])
                    }(!l);
                var d = Object(a.useState)(!1),
                    p = Object(f.a)(d, 2),
                    b = p[0],
                    j = p[1];
                return Object(a.useEffect)((function() {
                    var e = setTimeout((function() {
                        j(!0)
                    }), 600);
                    return function() {
                        clearTimeout(e)
                    }
                }), []), l ? !i && s ? Object(r.jsx)(At, {
                    children: Object(r.jsx)(Nt, {
                        children: t("unknownError")
                    })
                }) : i || c ? n : b ? Object(r.jsx)(At, {
                    children: Object(r.jsx)(Tt, {})
                }) : null : null
            }

            function Rt() {
                var e = Object(u.a)(["\n  background-color: ", ";\n  color: ", ";\n  border-radius: 12px;\n  width: fit-content;\n"]);
                return Rt = function() {
                    return e
                }, e
            }

            function Ut() {
                var e = Object(u.a)(["\n  background-color: rgba(255, 0, 122, 0.03);\n  color: ", ";\n  font-weight: 500;\n"]);
                return Ut = function() {
                    return e
                }, e
            }

            function _t() {
                var e = Object(u.a)(["\n  background-color: rgba(243, 132, 30, 0.05);\n  color: ", ";\n  font-weight: 500;\n"]);
                return _t = function() {
                    return e
                }, e
            }

            function Pt() {
                var e = Object(u.a)(["\n  border: 1px solid ", ";\n"]);
                return Pt = function() {
                    return e
                }, e
            }

            function Bt() {
                var e = Object(u.a)(["\n  background-color: ", ";\n"]);
                return Bt = function() {
                    return e
                }, e
            }

            function Mt() {
                var e = Object(u.a)(["\n  border: 1px solid ", ";\n  background-color: ", ";\n"]);
                return Mt = function() {
                    return e
                }, e
            }

            function Lt() {
                var e = Object(u.a)(["\n  width: 100%;\n  border-radius: 16px;\n  padding: 1.25rem;\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n"]);
                return Lt = function() {
                    return e
                }, e
            }
            var Dt = l.default.div(Lt(), (function(e) {
                    return e.padding
                }), (function(e) {
                    return e.border
                }), (function(e) {
                    return e.borderRadius
                })),
                zt = Dt,
                Yt = Object(l.default)(Dt)(Mt(), (function(e) {
                    return e.theme.colors.invertedContrast
                }), (function(e) {
                    return e.theme.colors.invertedContrast
                })),
                qt = Object(l.default)(Dt)(Bt(), (function(e) {
                    return e.theme.colors.tertiary
                })),
                Ft = (Object(l.default)(Dt)(Pt(), (function(e) {
                    return e.theme.colors.tertiary
                })), Object(l.default)(Dt)(_t(), (function(e) {
                    return e.theme.colors.binance
                }))),
                Vt = Object(l.default)(Dt)(Ut(), (function(e) {
                    return e.theme.colors.primary
                })),
                Wt = (Object(l.default)(Dt)(Rt(), (function(e) {
                    return e.theme.colors.primaryDark
                }), (function(e) {
                    return e.theme.colors.primary
                })), t(176));
            t(335);

            function Ht() {
                var e = Object(u.a)(["\n        min-height: ", "vh;\n      "]);
                return Ht = function() {
                    return e
                }, e
            }

            function Qt() {
                var e = Object(u.a)(["\n        max-height: ", "vh;\n      "]);
                return Qt = function() {
                    return e
                }, e
            }

            function Gt() {
                var e = Object(u.a)(["\n  &[data-reach-dialog-content] {\n    margin: 0 0 2rem 0;\n    border: 1px solid ", ";\n    background-color: ", ";\n    box-shadow: 0 4px 8px 0 ", ";\n    padding: 0px;\n    width: 80%;\n    overflow: hidden;\n\n    align-self: ", ";\n\n    max-width: 420px;\n    ", "\n    ", "\n    display: flex;\n    border-radius: 20px;\n\n    ", " {\n      width: 65vw;\n    }\n    ", " {\n      width: 85vw;\n    }\n  }\n"]);
                return Gt = function() {
                    return e
                }, e
            }

            function Kt() {
                var e = Object(u.a)(["\n  &[data-reach-dialog-overlay] {\n    z-index: 2;\n    background-color: transparent;\n    overflow: hidden;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: rgba(0, 0, 0, 0.3);\n  }\n"]);
                return Kt = function() {
                    return e
                }, e
            }
            var Jt = Object(Je.a)(Wt.b),
                Xt = Object(l.default)(Jt)(Kt()),
                Zt = Object(Je.a)(Wt.a),
                $t = Object(l.default)((function(e) {
                    e.minHeight, e.maxHeight, e.mobile, e.isOpen;
                    var n = Object(rn.a)(e, ["minHeight", "maxHeight", "mobile", "isOpen"]);
                    return Object(r.jsx)(Zt, Object(V.a)({}, n))
                })).attrs({
                    "aria-label": "dialog"
                })(Gt(), (function(e) {
                    return e.theme.colors.invertedContrast
                }), (function(e) {
                    return e.theme.colors.invertedContrast
                }), Object(an.b)(.95, "#191326"), (function(e) {
                    return e.mobile ? "flex-end" : "center"
                }), (function(e) {
                    var n = e.maxHeight;
                    return n && Object(l.css)(Qt(), n)
                }), (function(e) {
                    var n = e.minHeight;
                    return n && Object(l.css)(Ht(), n)
                }), (function(e) {
                    return e.theme.mediaQueries.lg
                }), (function(e) {
                    return e.theme.mediaQueries.sm
                }));

            function er(e) {
                var n = e.isOpen,
                    t = e.onDismiss,
                    a = e.minHeight,
                    i = void 0 !== a && a,
                    o = e.maxHeight,
                    c = void 0 === o ? 50 : o,
                    s = e.initialFocusRef,
                    u = e.children,
                    l = Object(Je.c)(n, null, {
                        config: {
                            duration: 200
                        },
                        from: {
                            opacity: 0
                        },
                        enter: {
                            opacity: 1
                        },
                        leave: {
                            opacity: 0
                        }
                    });
                return Object(r.jsx)(r.Fragment, {
                    children: l.map((function(e) {
                        var n = e.item,
                            a = e.key,
                            o = e.props;
                        return n && Object(r.jsx)(Xt, {
                            style: o,
                            onDismiss: t,
                            initialFocusRef: s,
                            children: Object(r.jsxs)($t, {
                                "aria-label": "dialog content",
                                minHeight: i,
                                maxHeight: c,
                                mobile: y.isMobile,
                                children: [!s && y.isMobile ? Object(r.jsx)("div", {
                                    tabIndex: 1
                                }) : null, u]
                            })
                        }, a)
                    }))
                })
            }
            var nr = t.p + "static/media/blue-loader.def91951.svg";

            function tr() {
                var e = Object(u.a)(["\n  align-items: center;\n  display: flex;\n\n  & > ", " {\n    flex: 1;\n  }\n"]);
                return tr = function() {
                    return e
                }, e
            }

            function rr() {
                var e = Object(u.a)(["\n  background-color: ", ";\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n"]);
                return rr = function() {
                    return e
                }, e
            }

            function ar() {
                var e = Object(u.a)(["\n  padding: 40px 0;\n"]);
                return ar = function() {
                    return e
                }, e
            }

            function ir() {
                var e = Object(u.a)(["\n  padding: 24px;\n"]);
                return ir = function() {
                    return e
                }, e
            }

            function or() {
                var e = Object(u.a)(["\n  width: 100%;\n  overflow-y: auto;\n"]);
                return or = function() {
                    return e
                }, e
            }
            var cr = l.default.div(or()),
                sr = Object(l.default)(Qe)(ir()),
                ur = Object(l.default)(He)(ar()),
                lr = Object(l.default)(sr)(rr(), (function(e) {
                    return e.theme.colors.invertedContrast
                })),
                dr = l.default.div(tr(), s.m),
                pr = function(e) {
                    var n = e.children,
                        t = e.onDismiss;
                    return Object(r.jsxs)(dr, {
                        children: [Object(r.jsx)(s.m, {
                            children: n
                        }), Object(r.jsx)(s.n, {
                            onClick: t,
                            variant: "text",
                            children: Object(r.jsx)(s.j, {
                                color: "primary"
                            })
                        })]
                    })
                };

            function br() {
                var e = Object(u.a)(["\n  height: ", ";\n  width: ", ";\n"]);
                return br = function() {
                    return e
                }, e
            }
            var fr = Object(l.default)(xn)(br(), (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                })),
                jr = function(e) {
                    var n = e.onDismiss,
                        t = e.pendingText;
                    return Object(r.jsx)(cr, {
                        children: Object(r.jsxs)(sr, {
                            children: [Object(r.jsx)(pr, {
                                onDismiss: n,
                                children: "Waiting for confirmation"
                            }), Object(r.jsx)(ur, {
                                children: Object(r.jsx)(fr, {
                                    src: nr,
                                    alt: "loader",
                                    size: "90px"
                                })
                            }), Object(r.jsxs)(Qe, {
                                gap: "12px",
                                justify: "center",
                                children: [Object(r.jsx)(Qe, {
                                    gap: "12px",
                                    justify: "center",
                                    children: Object(r.jsx)(s.v, {
                                        fontSize: "14px",
                                        children: Object(r.jsx)("strong", {
                                            children: t
                                        })
                                    })
                                }), Object(r.jsx)(s.v, {
                                    fontSize: "14px",
                                    children: "Confirm this transaction in your wallet"
                                })]
                            })]
                        })
                    })
                },
                mr = t(433),
                hr = function(e) {
                    var n = e.onDismiss,
                        t = e.chainId,
                        i = e.hash,
                        o = Object(a.useContext)(l.ThemeContext);
                    return Object(r.jsx)(cr, {
                        children: Object(r.jsxs)(sr, {
                            children: [Object(r.jsx)(pr, {
                                onDismiss: n,
                                children: "Transaction submitted"
                            }), Object(r.jsx)(ur, {
                                children: Object(r.jsx)(mr.a, {
                                    strokeWidth: .5,
                                    size: 97,
                                    color: o.colors.primary
                                })
                            }), Object(r.jsxs)(Qe, {
                                gap: "8px",
                                justify: "center",
                                children: [t && i && Object(r.jsx)(s.p, {
                                    href: Kn(t, i, "transaction"),
                                    children: "View on bscscan"
                                }), Object(r.jsx)(s.c, {
                                    onClick: n,
                                    mt: "20px",
                                    children: "Close"
                                })]
                            })]
                        })
                    })
                },
                vr = function(e) {
                    var n = e.isOpen,
                        t = e.onDismiss,
                        a = e.attemptingTxn,
                        i = e.hash,
                        o = e.pendingText,
                        c = e.content,
                        s = Ue().chainId;
                    return s ? Object(r.jsx)(er, {
                        isOpen: n,
                        onDismiss: t,
                        maxHeight: 90,
                        children: a ? Object(r.jsx)(jr, {
                            onDismiss: t,
                            pendingText: o
                        }) : i ? Object(r.jsx)(hr, {
                            chainId: s,
                            hash: i,
                            onDismiss: t
                        }) : c()
                    }) : null
                },
                yr = function(e) {
                    var n = e.title,
                        t = e.bottomContent,
                        a = e.onDismiss,
                        i = e.topContent;
                    return Object(r.jsxs)(cr, {
                        children: [Object(r.jsxs)(sr, {
                            children: [Object(r.jsx)(pr, {
                                onDismiss: a,
                                children: n
                            }), i()]
                        }), Object(r.jsx)(lr, {
                            gap: "12px",
                            children: t()
                        })]
                    })
                },
                Or = t(434),
                xr = function(e) {
                    var n = e.message,
                        t = e.onDismiss,
                        i = Object(a.useContext)(l.ThemeContext);
                    return Object(r.jsxs)(cr, {
                        children: [Object(r.jsxs)(sr, {
                            children: [Object(r.jsx)(pr, {
                                onDismiss: t,
                                children: "Error"
                            }), Object(r.jsxs)(Qe, {
                                style: {
                                    marginTop: 20,
                                    padding: "2rem 0"
                                },
                                gap: "24px",
                                justify: "center",
                                children: [Object(r.jsx)(Or.a, {
                                    color: i.colors.failure,
                                    style: {
                                        strokeWidth: 1.5
                                    },
                                    size: 64
                                }), Object(r.jsx)(s.v, {
                                    fontSize: "16px",
                                    color: "failure",
                                    style: {
                                        textAlign: "center",
                                        width: "85%"
                                    },
                                    children: n
                                })]
                            })]
                        }), Object(r.jsx)(lr, {
                            gap: "12px",
                            children: Object(r.jsx)(s.c, {
                                onClick: t,
                                children: "Dismiss"
                            })
                        })]
                    })
                },
                gr = vr,
                wr = {
                    translations: [],
                    setTranslations: function() {}
                },
                Cr = Object(a.createContext)(wr),
                kr = /%(.*?)%/,
                Tr = function(e, n, t) {
                    var r = e.find((function(e) {
                        return e.data.stringId === n
                    }));
                    if (r) {
                        var a = r.data.text;
                        return a.includes("%") ? function(e, n) {
                            var t = kr.exec(e)[0],
                                r = e.split(" ").indexOf(t),
                                a = n.split(" ")[r];
                            return e.replace(t, a)
                        }(a, t) : a
                    }
                    return t
                },
                Ir = function(e, n) {
                    var t = Object(a.useContext)(Cr).translations;
                    return "error" === t[0] ? n : t.length > 0 ? Tr(t, e, n) : null
                },
                Er = function() {
                    var e = Object(a.useContext)(Cr).translations;
                    return function(n, t) {
                        return "error" === e[0] ? t : e.length > 0 ? Tr(e, n, t) : t
                    }
                },
                Ar = function(e) {
                    var n = e.translationId,
                        t = e.children,
                        a = Er();
                    return Object(r.jsx)(r.Fragment, {
                        children: a(n, t)
                    })
                };

            function Nr() {
                var e = Object(u.a)(["\n  margin-bottom: 40px;\n"]);
                return Nr = function() {
                    return e
                }, e
            }
            var Sr, Rr = l.default.div(Nr()),
                Ur = function(e) {
                    var n = e.activeIndex,
                        t = void 0 === n ? 0 : n;
                    return Object(r.jsx)(Rr, {
                        children: Object(r.jsxs)(s.d, {
                            activeIndex: t,
                            size: "sm",
                            variant: "subtle",
                            children: [Object(r.jsx)(s.e, {
                                id: "swap-nav-link",
                                to: "/swap",
                                as: j.b,
                                children: Object(r.jsx)(Ar, {
                                    translationId: 8,
                                    children: "Swap"
                                })
                            }), Object(r.jsx)(s.e, {
                                id: "pool-nav-link",
                                to: "/pool",
                                as: j.b,
                                children: Object(r.jsx)(Ar, {
                                    translationId: 74,
                                    children: "Liquidity"
                                })
                            }), Object(r.jsx)(s.e, {
                                id: "pool-nav-link",
                                as: "a",
                                href: "https://www.binance.org/en/panama",
                                target: "_blank",
                                rel: "noreferrer noopener",
                                children: "Bridge"
                            })]
                        })
                    })
                },
                _r = t(111),
                Pr = t(116),
                Br = t(164),
                Mr = new _r.b(Pr),
                Lr = (new _r.b(Br), Mr),
                Dr = t(152),
                zr = function(e) {
                    Object(S.a)(t, e);
                    var n = Object(R.a)(t);

                    function t(e, r) {
                        var a;
                        return Object(A.a)(this, t), (a = n.call(this, e.chainId, e.address, e.decimals, e.symbol, e.name)).tokenInfo = void 0, a.tags = void 0, a.tokenInfo = e, a.tags = r, a
                    }
                    return Object(N.a)(t, [{
                        key: "logoURI",
                        get: function() {
                            return this.tokenInfo.logoURI
                        }
                    }]), t
                }(U.l),
                Yr = (Sr = {}, Object(O.a)(Sr, U.a.MAINNET, {}), Object(O.a)(Sr, U.a.BSCTESTNET, {}), Sr),
                qr = "undefined" !== typeof WeakMap ? new WeakMap : null;

            function Fr(e) {
                var n = Object(h.d)((function(e) {
                    return e.lists.byUrl
                }));
                return Object(a.useMemo)((function() {
                    var t;
                    if (!e) return Yr;
                    var r = null === (t = n[e]) || void 0 === t ? void 0 : t.current;
                    if (!r) return Yr;
                    try {
                        return function(e) {
                            var n = null === qr || void 0 === qr ? void 0 : qr.get(e);
                            if (n) return n;
                            var t = e.tokens.reduce((function(n, t) {
                                var r, a, i, o = null !== (r = null === (a = t.tags) || void 0 === a || null === (i = a.map((function(n) {
                                        var t;
                                        if (null === (t = e.tags) || void 0 === t ? void 0 : t[n]) return Object(V.a)(Object(V.a)({}, e.tags[n]), {}, {
                                            id: n
                                        })
                                    }))) || void 0 === i ? void 0 : i.filter((function(e) {
                                        return Boolean(e)
                                    }))) && void 0 !== r ? r : [],
                                    c = new zr(t, o);
                                if (void 0 !== n[c.chainId][c.address]) throw Error("Duplicate tokens.");
                                return Object(V.a)(Object(V.a)({}, n), {}, Object(O.a)({}, c.chainId, Object(V.a)(Object(V.a)({}, n[c.chainId]), {}, Object(O.a)({}, c.address, c))))
                            }), Object(V.a)({}, Yr));
                            return null === qr || void 0 === qr || qr.set(e, t), t
                        }(r)
                    } catch (a) {
                        return console.error("Could not show token list due to error", a), Yr
                    }
                }), [n, e])
            }

            function Vr() {
                return Object(h.d)((function(e) {
                    return e.lists.selectedListUrl
                }))
            }

            function Wr() {
                return Fr(Vr())
            }
            var Hr = /^0x[a-fA-F0-9]{40}$/,
                Qr = /^0x[a-f0-9]*$/;

            function Gr(e) {
                if (!Hr.test(e.address)) throw new Error("Invalid address: ".concat(e.address));
                if (!Qr.test(e.callData)) throw new Error("Invalid hex: ".concat(e.callData));
                return "".concat(e.address, "-").concat(e.callData)
            }

            function Kr(e) {
                var n = e.split("-");
                if (2 !== n.length) throw new Error("Invalid call key: ".concat(e));
                return {
                    address: n[0],
                    callData: n[1]
                }
            }
            var Jr = Object(_e.b)("multicall/addMulticallListeners"),
                Xr = Object(_e.b)("multicall/removeMulticallListeners"),
                Zr = Object(_e.b)("multicall/fetchingMulticallResults"),
                $r = Object(_e.b)("multicall/errorFetchingMulticallResults"),
                ea = Object(_e.b)("multicall/updateMulticallResults");

            function na(e) {
                return -1 !== ["string", "number"].indexOf(typeof e)
            }

            function ta(e) {
                return void 0 === e || Array.isArray(e) && e.every((function(e) {
                    return na(e) || Array.isArray(e) && e.every(na)
                }))
            }
            var ra = {
                    valid: !1,
                    blockNumber: void 0,
                    data: void 0
                },
                aa = {
                    blocksPerFetch: 1 / 0
                };

            function ia(e, n) {
                var t = Ue().chainId,
                    r = Object(h.d)((function(e) {
                        return e.multicall.callResults
                    })),
                    i = Object(h.c)(),
                    o = Object(a.useMemo)((function() {
                        var n, t, r;
                        return JSON.stringify(null !== (n = null === e || void 0 === e || null === (t = e.filter((function(e) {
                            return Boolean(e)
                        }))) || void 0 === t || null === (r = t.map(Gr)) || void 0 === r ? void 0 : r.sort()) && void 0 !== n ? n : [])
                    }), [e]);
                return Object(a.useEffect)((function() {
                    var e = JSON.parse(o);
                    if (t && 0 !== e.length) {
                        var r = e.map((function(e) {
                            return Kr(e)
                        }));
                        return i(Jr({
                                chainId: t,
                                calls: r,
                                options: n
                            })),
                            function() {
                                i(Xr({
                                    chainId: t,
                                    calls: r,
                                    options: n
                                }))
                            }
                    }
                }), [t, i, n, o]), Object(a.useMemo)((function() {
                    return e.map((function(e) {
                        var n;
                        if (!t || !e) return ra;
                        var a = null === (n = r[t]) || void 0 === n ? void 0 : n[Gr(e)];
                        return {
                            valid: !0,
                            data: (null === a || void 0 === a ? void 0 : a.data) && "0x" !== (null === a || void 0 === a ? void 0 : a.data) ? a.data : null,
                            blockNumber: null === a || void 0 === a ? void 0 : a.blockNumber
                        }
                    }))
                }), [r, e, t])
            }
            var oa = {
                    valid: !1,
                    result: void 0,
                    loading: !1,
                    syncing: !1,
                    error: !1
                },
                ca = {
                    valid: !0,
                    result: void 0,
                    loading: !0,
                    syncing: !0,
                    error: !1
                };

            function sa(e, n, t, r) {
                if (!e) return oa;
                var a = e.valid,
                    i = e.data,
                    o = e.blockNumber;
                if (!a) return oa;
                if (a && !o) return ca;
                if (!n || !t || !r) return ca;
                var c, s = i && i.length > 2,
                    u = (null !== o && void 0 !== o ? o : 0) < r;
                if (s && i) try {
                    c = n.decodeFunctionResult(t, i)
                } catch (l) {
                    return console.error("Result data parsing failed", t, i), {
                        valid: !0,
                        loading: !1,
                        error: !0,
                        syncing: u,
                        result: c
                    }
                }
                return {
                    valid: !0,
                    loading: !1,
                    syncing: u,
                    result: c,
                    error: !s
                }
            }

            function ua(e, n, t, r) {
                var i = Object(a.useMemo)((function() {
                        var t;
                        return null === e || void 0 === e || null === (t = e.interface) || void 0 === t ? void 0 : t.getFunction(n)
                    }), [e, n]),
                    o = ia(Object(a.useMemo)((function() {
                        return e && i && t && t.length > 0 ? t.map((function(n) {
                            return {
                                address: e.address,
                                callData: e.interface.encodeFunctionData(i, n)
                            }
                        })) : []
                    }), [t, e, i]), r),
                    c = ze();
                return Object(a.useMemo)((function() {
                    return o.map((function(n) {
                        return sa(n, null === e || void 0 === e ? void 0 : e.interface, i, c)
                    }))
                }), [i, e, o, c])
            }

            function la(e, n, t, r, i) {
                var o = Object(a.useMemo)((function() {
                        return n.getFunction(t)
                    }), [n, t]),
                    c = Object(a.useMemo)((function() {
                        return o && ta(r) ? n.encodeFunctionData(o, r) : void 0
                    }), [r, n, o]),
                    s = ia(Object(a.useMemo)((function() {
                        return o && e && e.length > 0 && c ? e.map((function(e) {
                            return e && c ? {
                                address: e,
                                callData: c
                            } : void 0
                        })) : []
                    }), [e, c, o]), i),
                    u = ze();
                return Object(a.useMemo)((function() {
                    return s.map((function(e) {
                        return sa(e, n, o, u)
                    }))
                }), [o, s, n, u])
            }

            function da(e, n, t, r) {
                var i = Object(a.useMemo)((function() {
                        var t;
                        return null === e || void 0 === e || null === (t = e.interface) || void 0 === t ? void 0 : t.getFunction(n)
                    }), [e, n]),
                    o = ia(Object(a.useMemo)((function() {
                        return e && i && ta(t) ? [{
                            address: e.address,
                            callData: e.interface.encodeFunctionData(i, t)
                        }] : []
                    }), [e, i, t]), r)[0],
                    c = ze();
                return Object(a.useMemo)((function() {
                    return sa(o, null === e || void 0 === e ? void 0 : e.interface, i, c)
                }), [o, e, i, c])
            }
            var pa = t(132),
                ba = t.n(pa),
                fa = Object(_e.b)("user/updateMatchesDarkMode"),
                ja = Object(_e.b)("user/updateUserDarkMode"),
                ma = Object(_e.b)("user/updateUserExpertMode"),
                ha = Object(_e.b)("user/updateUserSlippageTolerance"),
                va = Object(_e.b)("user/updateUserDeadline"),
                ya = Object(_e.b)("user/addSerializedToken"),
                Oa = Object(_e.b)("user/removeSerializedToken"),
                xa = Object(_e.b)("user/addSerializedPair"),
                ga = Object(_e.b)("user/removeSerializedPair"),
                wa = Object(_e.b)("user/muteAudio"),
                Ca = Object(_e.b)("user/unmuteAudio"),
                ka = "IS_DARK";

            function Ta(e) {
                return {
                    chainId: e.chainId,
                    address: e.address,
                    decimals: e.decimals,
                    symbol: e.symbol,
                    name: e.name
                }
            }

            function Ia(e) {
                return new U.l(e.chainId, e.address, e.decimals, e.symbol, e.name)
            }

            function Ea() {
                return Object(h.d)((function(e) {
                    return e.user.userExpertMode
                }))
            }

            function Aa() {
                var e = Object(h.c)();
                return [Object(h.d)((function(e) {
                    return e.user.userSlippageTolerance
                })), Object(a.useCallback)((function(n) {
                    e(ha({
                        userSlippageTolerance: n
                    }))
                }), [e])]
            }

            function Na() {
                var e = Object(h.c)();
                return [Object(h.d)((function(e) {
                    return e.user.userDeadline
                })), Object(a.useCallback)((function(n) {
                    e(va({
                        userDeadline: n
                    }))
                }), [e])]
            }

            function Sa() {
                var e = Object(h.c)();
                return Object(a.useCallback)((function(n) {
                    e(ya({
                        serializedToken: Ta(n)
                    }))
                }), [e])
            }

            function Ra() {
                var e = Ue().chainId,
                    n = Object(h.d)((function(e) {
                        return e.user.tokens
                    }));
                return Object(a.useMemo)((function() {
                    var t;
                    return e ? Object.values(null !== (t = n[e]) && void 0 !== t ? t : {}).map(Ia) : []
                }), [n, e])
            }

            function Ua(e) {
                return {
                    token0: Ta(e.token0),
                    token1: Ta(e.token1)
                }
            }

            function _a(e) {
                var n = Object(f.a)(e, 2),
                    t = n[0],
                    r = n[1];
                return new U.l(t.chainId, U.g.getAddress(t, r), 18, "Cake-LP", "Pancake LPs")
            }
            var Pa, Ba, Ma = t(140),
                La = t(234),
                Da = t(235),
                za = t(200),
                Ya = "0x16D4F26C15f3658ec65B1126ff27DD3dF2a2996b",
                qa = (t(236), t(237)),
                Fa = t(201),
                Va = (Pa = {}, Object(O.a)(Pa, U.a.MAINNET, "0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb"), Object(O.a)(Pa, U.a.BSCTESTNET, "0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A"), Pa),
                Wa = t(165),
                Ha = t(166),
                Qa = (Ba = {}, Object(O.a)(Ba, U.a.MAINNET, "0xC07d4604400139108BbdB3076636365A385879eF"), Object(O.a)(Ba, U.a.BSCTESTNET, "0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F"), Ba);
            new _r.b(Ha), new _r.b(Wa);

            function Ga(e, n) {
                var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = Ue(),
                    i = r.library,
                    o = r.account;
                return Object(a.useMemo)((function() {
                    if (!e || !n || !i) return null;
                    try {
                        return $n(e, n, i, t && o ? o : void 0)
                    } catch (r) {
                        return console.error("Failed to get contract", r), null
                    }
                }), [e, n, i, t, o])
            }

            function Ka() {
                var e = Ue().chainId;
                return Ga(e && Qa[e], Ha, !1)
            }

            function Ja(e, n) {
                return Ga(e, Wa, n)
            }

            function Xa(e, n) {
                return Ga(e, Pr, n)
            }

            function Za(e) {
                var n = Ue().chainId;
                if (n) switch (n) {
                    case U.a.MAINNET:
                    case U.a.BSCTESTNET:
                }
                return Ga(undefined, La, e)
            }

            function $a(e, n) {
                return Ga(e, Da, n)
            }

            function ei() {
                var e = Ue().chainId;
                return Ga(e && Va[e], Fa, !1)
            }

            function ni() {
                var e = Ue().chainId,
                    n = Ra(),
                    t = Wr();
                return Object(a.useMemo)((function() {
                    return e ? n.reduce((function(e, n) {
                        return e[n.address] = n, e
                    }), Object(V.a)({}, t[e])) : {}
                }), [e, n, t])
            }
            var ti = /^0x[a-fA-F0-9]{64}$/;

            function ri(e, n, t) {
                return e && e.length > 0 ? e : n && ti.test(n) ? Object(Dr.b)(n) : t
            }

            function ai(e) {
                var n = Ue().chainId,
                    t = ni(),
                    r = Qn(e),
                    i = Xa(r || void 0, !1),
                    o = function(e, n) {
                        return Ga(e, Br, n)
                    }(r || void 0, !1),
                    c = r ? t[r] : void 0,
                    s = da(c ? void 0 : i, "name", void 0, aa),
                    u = da(c ? void 0 : o, "name", void 0, aa),
                    l = da(c ? void 0 : i, "symbol", void 0, aa),
                    d = da(c ? void 0 : o, "symbol", void 0, aa),
                    p = da(c ? void 0 : i, "decimals", void 0, aa);
                return Object(a.useMemo)((function() {
                    if (c) return c;
                    if (n && r) {
                        if (p.loading || l.loading || s.loading) return null;
                        var e, t, a, i;
                        if (p.result) return new U.l(n, r, p.result[0], ri(null === (e = l.result) || void 0 === e ? void 0 : e[0], null === (t = d.result) || void 0 === t ? void 0 : t[0], "UNKNOWN"), ri(null === (a = s.result) || void 0 === a ? void 0 : a[0], null === (i = u.result) || void 0 === i ? void 0 : i[0], "Unknown Token"))
                    }
                }), [r, n, p.loading, p.result, l.loading, l.result, d.result, c, s.loading, s.result, u.result])
            }

            function ii(e) {
                var n = "ETH" === (null === e || void 0 === e ? void 0 : e.toUpperCase()),
                    t = ai(n ? void 0 : e);
                return n ? U.d : t
            }

            function oi(e) {
                var n = ei(),
                    t = Object(a.useMemo)((function() {
                        return e ? e.map(Qn).filter((function(e) {
                            return !1 !== e
                        })).sort() : []
                    }), [e]),
                    r = ua(n, "getEthBalance", t.map((function(e) {
                        return [e]
                    })));
                return Object(a.useMemo)((function() {
                    return t.reduce((function(e, n, t) {
                        var a, i, o = null === r || void 0 === r || null === (a = r[t]) || void 0 === a || null === (i = a.result) || void 0 === i ? void 0 : i[0];
                        return o && (e[n] = U.c.ether(U.f.BigInt(o.toString()))), e
                    }), {})
                }), [t, r])
            }

            function ci(e, n) {
                var t = Object(a.useMemo)((function() {
                        var e;
                        return null !== (e = null === n || void 0 === n ? void 0 : n.filter((function(e) {
                            return !1 !== Qn(null === e || void 0 === e ? void 0 : e.address)
                        }))) && void 0 !== e ? e : []
                    }), [n]),
                    r = la(Object(a.useMemo)((function() {
                        return t.map((function(e) {
                            return e.address
                        }))
                    }), [t]), Lr, "balanceOf", [e]),
                    i = Object(a.useMemo)((function() {
                        return r.some((function(e) {
                            return e.loading
                        }))
                    }), [r]);
                return [Object(a.useMemo)((function() {
                    return e && t.length > 0 ? t.reduce((function(e, n, t) {
                        var a, i, o = null === r || void 0 === r || null === (a = r[t]) || void 0 === a || null === (i = a.result) || void 0 === i ? void 0 : i[0],
                            c = o ? U.f.BigInt(o.toString()) : void 0;
                        return c && (e[n.address] = new U.m(n, c)), e
                    }), {}) : {}
                }), [e, t, r]), i]
            }

            function si(e, n) {
                return ci(e, n)[0]
            }

            function ui(e, n) {
                var t = si(e, [n]);
                if (n) return t[n.address]
            }

            function li(e, n) {
                var t = Object(a.useMemo)((function() {
                        var e;
                        return null !== (e = null === n || void 0 === n ? void 0 : n.filter((function(e) {
                            return e instanceof U.l
                        }))) && void 0 !== e ? e : []
                    }), [n]),
                    r = si(e, t),
                    i = oi(Object(a.useMemo)((function() {
                        var e;
                        return null !== (e = null === n || void 0 === n ? void 0 : n.some((function(e) {
                            return e === U.d
                        }))) && void 0 !== e && e
                    }), [n]) ? [e] : []);
                return Object(a.useMemo)((function() {
                    var t;
                    return null !== (t = null === n || void 0 === n ? void 0 : n.map((function(n) {
                        if (e && n) return n instanceof U.l ? r[n.address] : n === U.d ? i[e] : void 0
                    }))) && void 0 !== t ? t : []
                }), [e, n, i, r])
            }

            function di(e, n) {
                return li(e, [n])[0]
            }

            function pi(e, n) {
                var t = Object(a.useState)(n && n(e) ? e : void 0),
                    r = Object(f.a)(t, 2),
                    i = r[0],
                    o = r[1];
                return Object(a.useEffect)((function() {
                    o((function(t) {
                        return !n || n(e) ? e : t
                    }))
                }), [n, e]), i
            }

            function bi(e) {
                return null !== e && void 0 !== e
            }
            var fi = t(238),
                ji = t(173),
                mi = t.n(ji),
                hi = t(121),
                vi = t(104);
            var yi = new TextDecoder;

            function Oi(e) {
                var n = function(e) {
                        if ((e = e.startsWith("0x") ? e.substr(2) : e).length % 2 !== 0) throw new Error("hex must have length that is multiple of 2");
                        for (var n = new Uint8Array(e.length / 2), t = 0; t < n.length; t++) n[t] = parseInt(e.substr(2 * t, 2), 16);
                        return n
                    }(e),
                    t = Object(hi.getCodec)(n);
                switch (t) {
                    case "ipfs-ns":
                        var r = Object(hi.rmPrefix)(n),
                            a = new mi.a(r);
                        return "ipfs://".concat(Object(vi.toB58String)(a.multihash));
                    case "ipns-ns":
                        var i = Object(hi.rmPrefix)(n),
                            o = new mi.a(i),
                            c = Object(vi.decode)(o.multihash);
                        return "identity" === c.name ? "ipns://".concat(yi.decode(c.digest).trim()) : "ipns://".concat(Object(vi.toB58String)(o.multihash));
                    default:
                        throw new Error("Unrecognized codec: ".concat(t))
                }
            }
            var xi = /^(([a-zA-Z0-9]+\.)+)eth(\/.*)?$/;

            function gi(e) {
                var n = e.match(xi);
                if (n) return {
                    ensName: "".concat(n[1].toLowerCase(), "eth"),
                    ensPath: n[3]
                }
            }

            function wi(e) {
                var n, t;
                switch (e.split(":")[0].toLowerCase()) {
                    case "https":
                        return [e];
                    case "http":
                        return ["https".concat(e.substr(4)), e];
                    case "ipfs":
                        var r = null === (n = e.match(/^ipfs:(\/\/)?(.*)$/i)) || void 0 === n ? void 0 : n[2];
                        return ["https://cloudflare-ipfs.com/ipfs/".concat(r, "/"), "https://ipfs.io/ipfs/".concat(r, "/")];
                    case "ipns":
                        var a = null === (t = e.match(/^ipns:(\/\/)?(.*)$/i)) || void 0 === t ? void 0 : t[2];
                        return ["https://cloudflare-ipfs.com/ipns/".concat(a, "/"), "https://ipfs.io/ipns/".concat(a, "/")];
                    default:
                        return []
                }
            }
            var Ci = t(85);

            function ki(e) {
                return /^0x0*$/.test(e)
            }

            function Ti(e) {
                var n = Object(a.useMemo)((function() {
                        return e ? gi(e) : void 0
                    }), [e]),
                    t = function(e) {
                        var n, t, r, i = Object(a.useMemo)((function() {
                                if (!e) return [void 0];
                                try {
                                    return e ? [Object(Ci.namehash)(e)] : [void 0]
                                } catch (n) {
                                    return [void 0]
                                }
                            }), [e]),
                            o = da(Za(!1), "resolver", i),
                            c = null === (n = o.result) || void 0 === n ? void 0 : n[0],
                            s = da($a(c && ki(c) ? void 0 : c, !1), "contenthash", i);
                        return {
                            contenthash: null !== (t = null === (r = s.result) || void 0 === r ? void 0 : r[0]) && void 0 !== t ? t : null,
                            loading: o.loading || s.loading
                        }
                    }(null === n || void 0 === n ? void 0 : n.ensName);
                return Object(a.useMemo)((function() {
                    return n ? t.contenthash ? wi(Oi(t.contenthash)) : [] : e ? wi(e) : []
                }), [n, t.contenthash, e])
            }
            var Ii = t(435),
                Ei = {};

            function Ai(e) {
                var n = e.srcs,
                    t = e.alt,
                    i = Object(rn.a)(e, ["srcs", "alt"]),
                    o = Object(a.useState)(0),
                    c = Object(f.a)(o, 2)[1],
                    s = n.find((function(e) {
                        return !Ei[e]
                    }));
                return s ? Object(r.jsx)("img", Object(V.a)(Object(V.a)({}, i), {}, {
                    alt: t,
                    src: s,
                    onError: function() {
                        s && (Ei[s] = !0), c((function(e) {
                            return e + 1
                        }))
                    }
                })) : Object(r.jsx)(Ii.a, Object(V.a)({}, i))
            }

            function Ni() {
                var e = Object(u.a)(["\n  width: ", ";\n  height: ", ";\n"]);
                return Ni = function() {
                    return e
                }, e
            }
            var Si = Object(l.default)(Ai)(Ni(), (function(e) {
                return e.size
            }), (function(e) {
                return e.size
            }));

            function Ri(e) {
                var n = e.logoURI,
                    t = e.style,
                    a = e.size,
                    i = void 0 === a ? "24px" : a,
                    o = e.alt,
                    c = Ti(n);
                return Object(r.jsx)(Si, {
                    alt: o,
                    size: i,
                    srcs: c,
                    style: t
                })
            }
            var Ui = t(442),
                _i = t(139);

            function Pi(e, n) {
                var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = Object(a.useRef)();
                Object(a.useEffect)((function() {
                    r.current = e
                }), [e]), Object(a.useEffect)((function() {
                    function e() {
                        var e = r.current;
                        e && e()
                    }
                    if (null !== n) {
                        t && e();
                        var a = setInterval(e, n);
                        return function() {
                            return clearInterval(a)
                        }
                    }
                }), [n, t])
            }

            function Bi() {
                var e = Object(u.a)(["\n  width: 8px;\n  height: 8px;\n  z-index: 9998;\n\n  ::before {\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    z-index: 9998;\n\n    content: '';\n    border: 1px solid ", ";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n\n  &.arrow-top {\n    bottom: -5px;\n    ::before {\n      border-top: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-bottom {\n    top: -5px;\n    ::before {\n      border-bottom: none;\n      border-right: none;\n    }\n  }\n\n  &.arrow-left {\n    right: -5px;\n\n    ::before {\n      border-bottom: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-right {\n    left: -5px;\n    ::before {\n      border-right: none;\n      border-top: none;\n    }\n  }\n"]);
                return Bi = function() {
                    return e
                }, e
            }

            function Mi() {
                var e = Object(u.a)(["\n  display: inline-block;\n"]);
                return Mi = function() {
                    return e
                }, e
            }

            function Li() {
                var e = Object(u.a)(["\n  z-index: 9999;\n\n  visibility: ", ";\n  opacity: ", ";\n  transition: visibility 150ms linear, opacity 150ms linear;\n\n  background: ", ";\n  border: 1px solid ", ";\n  box-shadow: 0 4px 8px 0 ", ";\n  color: ", ";\n  border-radius: 8px;\n"]);
                return Li = function() {
                    return e
                }, e
            }
            var Di = l.default.div(Li(), (function(e) {
                    return e.show ? "visible" : "hidden"
                }), (function(e) {
                    return e.show ? 1 : 0
                }), (function(e) {
                    return e.theme.colors.invertedContrast
                }), (function(e) {
                    return e.theme.colors.tertiary
                }), Object(an.b)(.9, "#2F80ED"), (function(e) {
                    return e.theme.colors.textSubtle
                })),
                zi = l.default.div(Mi()),
                Yi = l.default.div(Bi(), (function(e) {
                    return e.theme.colors.tertiary
                }), (function(e) {
                    return e.theme.colors.invertedContrast
                }));

            function qi(e) {
                var n, t, i = e.content,
                    o = e.show,
                    c = e.children,
                    s = e.placement,
                    u = void 0 === s ? "auto" : s,
                    l = Object(a.useState)(null),
                    d = Object(f.a)(l, 2),
                    p = d[0],
                    b = d[1],
                    j = Object(a.useState)(null),
                    m = Object(f.a)(j, 2),
                    h = m[0],
                    v = m[1],
                    y = Object(a.useState)(null),
                    O = Object(f.a)(y, 2),
                    x = O[0],
                    g = O[1],
                    w = Object(Ui.a)(p, h, {
                        placement: u,
                        strategy: "fixed",
                        modifiers: [{
                            name: "offset",
                            options: {
                                offset: [8, 8]
                            }
                        }, {
                            name: "arrow",
                            options: {
                                element: x
                            }
                        }]
                    }),
                    C = w.styles,
                    k = w.update,
                    T = w.attributes;
                return Pi(Object(a.useCallback)((function() {
                    k && k()
                }), [k]), o ? 100 : null), Object(r.jsxs)(r.Fragment, {
                    children: [Object(r.jsx)(zi, {
                        ref: b,
                        children: c
                    }), Object(r.jsx)(_i.a, {
                        children: Object(r.jsxs)(Di, Object(V.a)(Object(V.a)({
                            show: o,
                            ref: v,
                            style: C.popper
                        }, T.popper), {}, {
                            children: [i, Object(r.jsx)(Yi, Object(V.a)({
                                className: "arrow-".concat(null !== (n = null === (t = T.popper) || void 0 === t ? void 0 : t["data-popper-placement"]) && void 0 !== n ? n : ""),
                                ref: g,
                                style: C.arrow
                            }, T.arrow))]
                        }))
                    })]
                })
            }

            function Fi() {
                var e = Object(u.a)(["\n  width: 228px;\n  padding: 0.6rem 1rem;\n  line-height: 150%;\n  font-weight: 400;\n"]);
                return Fi = function() {
                    return e
                }, e
            }
            var Vi = l.default.div(Fi());

            function Wi(e) {
                var n = e.text,
                    t = Object(rn.a)(e, ["text"]);
                return Object(r.jsx)(qi, Object(V.a)({
                    content: Object(r.jsx)(Vi, {
                        children: n
                    })
                }, t))
            }

            function Hi(e) {
                var n = e.children,
                    t = Object(rn.a)(e, ["children"]),
                    i = Object(a.useState)(!1),
                    o = Object(f.a)(i, 2),
                    c = o[0],
                    s = o[1],
                    u = Object(a.useCallback)((function() {
                        return s(!0)
                    }), [s]),
                    l = Object(a.useCallback)((function() {
                        return s(!1)
                    }), [s]);
                return Object(r.jsx)(Wi, Object(V.a)(Object(V.a)({}, t), {}, {
                    show: c,
                    children: Object(r.jsx)("div", {
                        onMouseEnter: u,
                        onMouseLeave: l,
                        children: n
                    })
                }))
            }

            function Qi() {
                var e = Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.2rem;\n  border: none;\n  background: none;\n  outline: none;\n  cursor: default;\n  border-radius: 36px;\n  background-color: ", ";\n  color: ", ";\n\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n"]);
                return Qi = function() {
                    return e
                }, e
            }
            var Gi = l.default.div(Qi(), (function(e) {
                return e.theme.colors.invertedContrast
            }), (function(e) {
                return e.theme.colors.textSubtle
            }));

            function Ki(e) {
                var n = e.text,
                    t = Object(a.useState)(!1),
                    i = Object(f.a)(t, 2),
                    o = i[0],
                    c = i[1],
                    s = Object(a.useCallback)((function() {
                        return c(!0)
                    }), [c]),
                    u = Object(a.useCallback)((function() {
                        return c(!1)
                    }), [c]);
                return Object(r.jsx)("span", {
                    style: {
                        marginLeft: 4
                    },
                    children: Object(r.jsx)(Wi, {
                        text: n,
                        show: o,
                        children: Object(r.jsx)(Gi, {
                            onClick: s,
                            onMouseEnter: s,
                            onMouseLeave: u,
                            children: Object(r.jsx)(Ii.a, {
                                size: 16
                            })
                        })
                    })
                })
            }

            function Ji() {
                var e = Object(u.a)(["\n  width: ", ";\n  height: ", ";\n"]);
                return Ji = function() {
                    return e
                }, e
            }
            var Xi = Object(l.default)(Ai)(Ji(), (function(e) {
                return e.size
            }), (function(e) {
                return e.size
            }));

            function Zi() {
                var e = Object(u.a)(["\n  width: ", ";\n  height: ", ";\n"]);
                return Zi = function() {
                    return e
                }, e
            }

            function $i() {
                var e = Object(u.a)(["\n  width: ", ";\n  height: ", ";\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);\n  border-radius: 24px;\n"]);
                return $i = function() {
                    return e
                }, e
            }
            var eo = function(e) {
                    return "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/".concat(e, "/logo.png")
                },
                no = l.default.img($i(), (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                })),
                to = Object(l.default)(Ai)(Zi(), (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                }));

            function ro(e) {
                var n, t, i = e.currency,
                    o = e.size,
                    c = void 0 === o ? "24px" : o,
                    s = e.style,
                    u = Ti(i instanceof zr ? i.logoURI : void 0),
                    l = Object(a.useMemo)((function() {
                        return i === U.d ? [] : i instanceof U.l ? i instanceof zr ? [].concat(Object(ce.a)(u), ["/images/coins/".concat(null !== (n = null === i || void 0 === i ? void 0 : i.symbol) && void 0 !== n ? n : "token", ".png"), eo(i.address)]) : ["/images/coins/".concat(null !== (e = null === i || void 0 === i ? void 0 : i.symbol) && void 0 !== e ? e : "token", ".png"), eo(i.address)] : [];
                        var e, n
                    }), [i, u]);
                return i === U.d ? Object(r.jsx)(no, {
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAulBMVEUAAADvrxDvtwjvuAnxuQvwuQrwuQvwuQrwugvwugvvtwvxuAvxugvvtwjvtgrwuQvxugnwuwryuQvxuwvvugvvtQvwuQvvtwzvuQ3wuAvvvxDvuAvvuArwugvvtwrvuQrvtgvvuAzvuAvvtwvvtgvwuQvFmQvFmQwZGRAZGRELDhF+Yw5EOQ82LhDirgs2Lg9wWQ4oIxDTpAxhTg7TowsnIxBhTw59ZA6Mbg1vWQ6Lbw6Lbg1EOA////8DpA4OAAAAJXRSTlMAEEBwj6/P3++/YJ+fIFDfb69fjzAw70BQvxCQsM+gUHCQcKCQAtJYUgAAAAFiS0dEPdBtUVkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflARoNBydqCg4lAAADq0lEQVRo3sWabXeaMBSAg4gglrG1Vqrtttr2FgZrt6KOvf3/37UPakngJrk32LP70ZzzPOblXiCJEKTwRv44mIQRAEAUToOxP/LEqcKLZyEgMTmLkxPQ/SkYYjrQMTLS9xG8c//zIZAijZ347yMgh4NiFAIrmIrkA7DjjDHd5xE4BLkT3hgc44KUfEkIzpEShmkewYBIL63DDwPj3LL4YXD4b8w3Ggjj85gPGKU5gV98IRgundfnY1GWBMMCXa0ejU8ypFjGjYl8kuGiz4/JfJLhnD8BLZ9i6E3DGYdPMQTMAVL5FEOmCEImn2BIOR3o8wkGn94BjG83LDxqB3C+3eATO6DjWw2vs3DlyLcajgspYPCrimGYHpKYwwfgGDzrFPf5LMN+mpc8PscwtYwQzucYPPMIfcX5XcOTnhCb6+jzNwnzXW6RDS+1njATQkyAZNioLRWJD6kQK2OqvBo23ZaKwgfwxAgohk2/paLwIRM++vtWNbT87VYxSPytJhOu8fW5kQ0Sf/ciGyT+D3y1XqOF6LGQ//RzI/HLUjL8lPiafLjB8nifX8iwb3dlqRhkPm74iDwLjvn7C+djhkab06mI9PWhwfl9Q6OvGgthqj8Nzu8aGlNdEsb61uB81dAYK19XkBea+larglpT+QqbQDFUcoNsUPO3MvChP8mtoVIbWkO3PlR6/gJZpkdD1W04Gvr1p9LxIcWqda5LtL0Bq2+Vhg9TtFTkSqnY/lYMEv+PUvkKvFSgxS4v5PomrdZ6J/EbebVWhabY4eW6Vte/ZKiV9S8Zak25ziwPnB1WNdr8etnaHjiWR+YTXpfa/LUYPPOr9Su/Z2jKkmL4KIT4ROJ3DE1Zkgwz84vX31JT+RrOi5dhEtTK1xpUfmF4dUwsL7+4gc7ffyD4wDPQ+bDf6DQu1L6BwYfDfsKSY+Dwbw7faOZkzg0fgWY+fKZ9xuoNBfEz1jjNBoOFD+1e9ipyMdj48m7ILfANNj7EnO2cvqFgbefYngp9g5UPndOEgGew82fdTcGIY7Dz+ycJ9m3N1mDnA3LcsiYbCPw1svO7ComGwnFrmTANkBc0fuK8vZ8XBD7MdQcIMcFA4BvO027hBHFnOsS5fWM+aZScx+cw0+EQfDT//0eNQqzWrvw19aZC7NSJiHFmndzz+QHvfgK3E2nGPtXnKKI7p3sJVEXqO19DuQrs+GUmhkQSG99cl/4J7tAk8T26eRvO4hPe0Mn8h2B5vP4zCR78jAj/BxvHMSB40+znAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAxLTI2VDEzOjA0OjUyKzAwOjAwvapJxgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMS0yNlQxMzowNDo1MiswMDowMMz38XoAAAAASUVORK5CYII=",
                    size: c,
                    style: s
                }) : (null === i || void 0 === i ? void 0 : i.symbol) ? Object(r.jsx)(Xi, {
                    size: c,
                    srcs: l,
                    alt: "".concat(null !== (n = null === i || void 0 === i ? void 0 : i.symbol) && void 0 !== n ? n : "token", " logo"),
                    style: s
                }) : Object(r.jsx)(to, {
                    size: c,
                    srcs: l,
                    alt: "".concat(null !== (t = null === i || void 0 === i ? void 0 : i.symbol) && void 0 !== t ? t : "token", " logo"),
                    style: s
                })
            }

            function ao() {
                var e = Object(u.a)(["\n  border: 1px solid ", ";\n  border-radius: 10px;\n  display: flex;\n  padding: 6px;\n\n  align-items: center;\n  :hover {\n    cursor: ", ";\n    background-color: ", ";\n  }\n\n  background-color: ", ";\n  opacity: ", ";\n"]);
                return ao = function() {
                    return e
                }, e
            }
            var io = l.default.div(ao(), (function(e) {
                var n = e.theme;
                return e.disable ? "transparent" : n.colors.tertiary
            }), (function(e) {
                return !e.disable && "pointer"
            }), (function(e) {
                var n = e.theme;
                return !e.disable && n.colors.invertedContrast
            }), (function(e) {
                var n = e.theme;
                return e.disable && n.colors.tertiary
            }), (function(e) {
                return e.disable && "0.4"
            }));

            function oo(e) {
                var n = e.chainId,
                    t = e.onSelect,
                    a = e.selectedCurrency;
                return Object(r.jsxs)(Qe, {
                    gap: "md",
                    children: [Object(r.jsxs)(Pn, {
                        children: [Object(r.jsx)(s.v, {
                            fontSize: "14px",
                            children: "Common bases"
                        }), Object(r.jsx)(Ki, {
                            text: "These tokens are commonly paired with other tokens."
                        })]
                    }), Object(r.jsxs)(Pn, {
                        gap: "4px",
                        children: [Object(r.jsxs)(io, {
                            onClick: function() {
                                a && Object(U.q)(a, U.d) || t(U.d)
                            },
                            disable: a === U.d,
                            children: [Object(r.jsx)(ro, {
                                currency: U.d,
                                style: {
                                    marginRight: 8
                                }
                            }), Object(r.jsx)(s.v, {
                                children: "BNB"
                            })]
                        }), (n ? ve[n] : []).map((function(e) {
                            var n = a instanceof U.l && a.address === e.address;
                            return Object(r.jsxs)(io, {
                                onClick: function() {
                                    return !n && t(e)
                                },
                                disable: n,
                                children: [Object(r.jsx)(ro, {
                                    currency: e,
                                    style: {
                                        marginRight: 8
                                    }
                                }), Object(r.jsx)(s.v, {
                                    children: e.symbol
                                })]
                            }, e.address)
                        }))]
                    })]
                })
            }
            var co = t(246);

            function so() {
                var e = Object(u.a)(["\n  width: 100%;\n  height: 1px;\n  background-color: ", ";\n"]);
                return so = function() {
                    return e
                }, e
            }

            function uo() {
                var e = Object(u.a)(["\n  width: 100%;\n  height: 1px;\n  background-color: ", ";\n"]);
                return uo = function() {
                    return e
                }, e
            }

            function lo() {
                var e = Object(u.a)(["\n  position: relative;\n  display: flex;\n  padding: 16px;\n  align-items: center;\n  width: 100%;\n  white-space: nowrap;\n  background: none;\n  border: none;\n  outline: none;\n  border-radius: 20px;\n  color: ", ";\n  border-style: solid;\n  border: 1px solid ", ";\n  -webkit-appearance: none;\n\n  font-size: 18px;\n\n  ::placeholder {\n    color: ", ";\n  }\n  transition: border 100ms;\n  :focus {\n    border: 1px solid ", ";\n    outline: none;\n  }\n"]);
                return lo = function() {
                    return e
                }, e
            }

            function po() {
                var e = Object(u.a)(["\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1fr) auto minmax(0, 72px);\n  grid-gap: 16px;\n  cursor: ", ";\n  pointer-events: ", ";\n  :hover {\n    background-color: ", ";\n  }\n  opacity: ", ";\n"]);
                return po = function() {
                    return e
                }, e
            }

            function bo() {
                var e = Object(u.a)(["\n  padding: 20px;\n  padding-bottom: 12px;\n"]);
                return bo = function() {
                    return e
                }, e
            }

            function fo() {
                var e = Object(u.a)(["\n  color: ", ";\n  font-size: 14px;\n"]);
                return fo = function() {
                    return e
                }, e
            }

            function jo() {
                var e = Object(u.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: 1rem 1rem;\n  margin: 0.25rem 0.5rem;\n  justify-content: center;\n  flex: 1;\n  user-select: none;\n"]);
                return jo = function() {
                    return e
                }, e
            }
            l.default.div(jo());
            var mo = Object(l.default)(Bn)(fo(), (function(e) {
                    return e.theme.colors.primary
                })),
                ho = Object(l.default)(Qe)(bo()),
                vo = Object(l.default)(Un)(po(), (function(e) {
                    return !e.disabled && "pointer"
                }), (function(e) {
                    return e.disabled && "none"
                }), (function(e) {
                    var n = e.theme;
                    return !e.disabled && n.colors.invertedContrast
                }), (function(e) {
                    var n = e.disabled,
                        t = e.selected;
                    return n || t ? .5 : 1
                })),
                yo = l.default.input(lo(), (function(e) {
                    return e.theme.colors.text
                }), (function(e) {
                    return e.theme.colors.tertiary
                }), (function(e) {
                    return e.theme.colors.textDisabled
                }), (function(e) {
                    return e.theme.colors.primary
                })),
                Oo = l.default.div(uo(), (function(e) {
                    return e.theme.colors.invertedContrast
                })),
                xo = l.default.div(so(), (function(e) {
                    return e.theme.colors.tertiary
                }));

            function go() {
                var e = Object(u.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]);
                return go = function() {
                    return e
                }, e
            }

            function wo() {
                var e = Object(u.a)(["\n  background-color: ", ";\n  color: ", ";\n  font-size: 14px;\n  border-radius: 4px;\n  padding: 0.25rem 0.3rem 0.25rem 0.3rem;\n  max-width: 6rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  justify-self: flex-end;\n  margin-right: 4px;\n"]);
                return wo = function() {
                    return e
                }, e
            }

            function Co() {
                var e = Object(u.a)(["\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 5rem;\n  text-overflow: ellipsis;\n"]);
                return Co = function() {
                    return e
                }, e
            }
            var ko = Cn.main;

            function To(e) {
                return e instanceof U.l ? e.address : e === U.d ? "ETHER" : ""
            }
            var Io = Object(l.default)(s.v)(Co()),
                Eo = l.default.div(wo(), (function(e) {
                    return e.theme.colors.tertiary
                }), (function(e) {
                    return e.theme.colors.textSubtle
                }));

            function Ao(e) {
                var n = e.balance;
                return Object(r.jsx)(Io, {
                    title: n.toExact(),
                    children: n.toSignificant(4)
                })
            }
            var No = l.default.div(go());

            function So(e) {
                var n = e.currency;
                if (!(n instanceof zr)) return Object(r.jsx)("span", {});
                var t = n.tags;
                if (!t || 0 === t.length) return Object(r.jsx)("span", {});
                var a = t[0];
                return Object(r.jsxs)(No, {
                    children: [Object(r.jsx)(Hi, {
                        text: a.description,
                        children: Object(r.jsx)(Eo, {
                            children: a.name
                        }, a.id)
                    }), t.length > 1 ? Object(r.jsx)(Hi, {
                        text: t.slice(1).map((function(e) {
                            var n = e.name,
                                t = e.description;
                            return "".concat(n, ": ").concat(t)
                        })).join("; \n"),
                        children: Object(r.jsx)(Eo, {
                            children: "..."
                        })
                    }) : null]
                })
            }

            function Ro(e) {
                var n = e.currency,
                    t = e.onSelect,
                    i = e.isSelected,
                    o = e.otherSelected,
                    c = e.style,
                    u = Ue(),
                    l = u.account,
                    d = u.chainId,
                    p = To(n),
                    b = nt(Wr(), n),
                    f = function(e) {
                        return !!Ra().find((function(n) {
                            return Object(U.q)(e, n)
                        }))
                    }(n),
                    j = di(null !== l && void 0 !== l ? l : void 0, n),
                    m = function() {
                        var e = Object(h.c)();
                        return Object(a.useCallback)((function(n, t) {
                            e(Oa({
                                chainId: n,
                                address: t
                            }))
                        }), [e])
                    }(),
                    v = Sa();
                return Object(r.jsxs)(vo, {
                    style: c,
                    className: "token-item-".concat(p),
                    onClick: function() {
                        return i ? null : t()
                    },
                    disabled: i,
                    selected: o,
                    children: [Object(r.jsx)(ro, {
                        currency: n,
                        size: "24px"
                    }), Object(r.jsxs)(Ge, {
                        children: [Object(r.jsx)(s.v, {
                            title: n.name,
                            children: n.symbol
                        }), Object(r.jsxs)(mo, {
                            children: [b || !f || n instanceof zr ? null : Object(r.jsxs)(ko, {
                                fontWeight: 500,
                                children: ["Added by user", Object(r.jsx)(mn, {
                                    onClick: function(e) {
                                        e.stopPropagation(), d && n instanceof U.l && m(d, n.address)
                                    },
                                    children: "(Remove)"
                                })]
                            }), b || f || n instanceof zr ? null : Object(r.jsxs)(ko, {
                                fontWeight: 500,
                                children: ["Found by address", Object(r.jsx)(mn, {
                                    onClick: function(e) {
                                        e.stopPropagation(), n instanceof U.l && v(n)
                                    },
                                    children: "(Add)"
                                })]
                            })]
                        })]
                    }), Object(r.jsx)(So, {
                        currency: n
                    }), Object(r.jsx)(Bn, {
                        style: {
                            justifySelf: "flex-end"
                        },
                        children: j ? Object(r.jsx)(Ao, {
                            balance: j
                        }) : l ? Object(r.jsx)(Tt, {}) : null
                    })]
                })
            }

            function Uo(e) {
                var n = e.height,
                    t = e.currencies,
                    i = e.selectedCurrency,
                    o = e.onCurrencySelect,
                    c = e.otherCurrency,
                    s = e.fixedListRef,
                    u = e.showETH,
                    l = Object(a.useMemo)((function() {
                        return u ? [U.b.ETHER].concat(Object(ce.a)(t)) : Object(ce.a)(t)
                    }), [t, u]),
                    d = Object(a.useCallback)((function(e) {
                        var n = e.data,
                            t = e.index,
                            a = e.style,
                            s = n[t],
                            u = Boolean(i && Object(U.q)(i, s)),
                            l = Boolean(c && Object(U.q)(c, s));
                        return Object(r.jsx)(Ro, {
                            style: a,
                            currency: s,
                            isSelected: u,
                            onSelect: function() {
                                return o(s)
                            },
                            otherSelected: l
                        })
                    }), [o, c, i]),
                    p = Object(a.useCallback)((function(e, n) {
                        return To(n[e])
                    }), []);
                return Object(r.jsx)(co.a, {
                    height: n,
                    ref: s,
                    width: "100%",
                    itemData: l,
                    itemCount: l.length,
                    itemSize: 56,
                    itemKey: p,
                    children: d
                })
            }

            function _o(e, n) {
                if (0 === n.length) return e;
                var t = Qn(n);
                if (t) return e.filter((function(e) {
                    return e.address === t
                }));
                var r = n.toLowerCase().split(/\s+/).filter((function(e) {
                    return e.length > 0
                }));
                if (0 === r.length) return e;
                var a = function(e) {
                    var n = e.toLowerCase().split(/\s+/).filter((function(e) {
                        return e.length > 0
                    }));
                    return r.every((function(e) {
                        return 0 === e.length || n.some((function(n) {
                            return n.startsWith(e) || n.endsWith(e)
                        }))
                    }))
                };
                return e.filter((function(e) {
                    var n = e.symbol,
                        t = e.name;
                    return n && a(n) || t && a(t)
                }))
            }

            function Po() {
                var e = Object(u.a)(["\n  padding: 8px;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 8px;\n  user-select: none;\n  & > * {\n    user-select: none;\n  }\n  :hover {\n    cursor: pointer;\n  }\n"]);
                return Po = function() {
                    return e
                }, e
            }
            var Bo = Object(l.default)(Bn)(Po(), (function(e) {
                return e.theme.colors.invertedContrast
            }), (function(e) {
                return e.theme.colors.text
            }));

            function Mo(e) {
                var n = e.toggleSortOrder,
                    t = e.ascending;
                return Object(r.jsx)(Bo, {
                    onClick: n,
                    children: Object(r.jsx)(s.v, {
                        fontSize: "14px",
                        children: t ? "\u2191" : "\u2193"
                    })
                })
            }

            function Lo(e) {
                var n = function() {
                        var e = Ue().account,
                            n = ni(),
                            t = si(null !== e && void 0 !== e ? e : void 0, Object(a.useMemo)((function() {
                                return Object.values(null !== n && void 0 !== n ? n : {})
                            }), [n]));
                        return null !== t && void 0 !== t ? t : {}
                    }(),
                    t = Object(a.useMemo)((function() {
                        return function(e) {
                            return function(n, t) {
                                var r, a, i = (r = e[n.address], a = e[t.address], r && a ? r.greaterThan(a) ? -1 : r.equalTo(a) ? 0 : 1 : r && r.greaterThan("0") ? -1 : a && a.greaterThan("0") ? 1 : 0);
                                return 0 !== i ? i : n.symbol && t.symbol ? n.symbol.toLowerCase() < t.symbol.toLowerCase() ? -1 : 1 : n.symbol || t.symbol ? -1 : 0
                            }
                        }(null !== n && void 0 !== n ? n : {})
                    }), [n]);
                return Object(a.useMemo)((function() {
                    return e ? function(e, n) {
                        return -1 * t(e, n)
                    } : t
                }), [e, t])
            }

            function Do(e) {
                var n = e.selectedCurrency,
                    t = e.onCurrencySelect,
                    i = e.otherSelectedCurrency,
                    o = e.showCommonBases,
                    c = e.onDismiss,
                    u = e.isOpen,
                    d = (e.onChangeList, Object(xt.b)().t),
                    p = Ue().chainId,
                    b = (Object(a.useContext)(l.ThemeContext), Object(a.useRef)()),
                    j = Object(a.useState)(""),
                    m = Object(f.a)(j, 2),
                    v = m[0],
                    y = m[1],
                    O = Object(a.useState)(!1),
                    x = Object(f.a)(O, 2),
                    g = x[0],
                    w = x[1],
                    C = ni(),
                    k = Qn(v),
                    T = ai(v),
                    I = Object(a.useMemo)((function() {
                        var e = v.toLowerCase().trim();
                        return "" === e || "e" === e || "et" === e || "eth" === e
                    }), [v]),
                    E = Lo(g),
                    A = Object(h.d)((function(e) {
                        return e.user.audioPlay
                    })),
                    N = Object(a.useMemo)((function() {
                        return k ? T ? [T] : [] : _o(Object.values(C), v)
                    }), [k, T, C, v]),
                    S = Object(a.useMemo)((function() {
                        if (T) return [T];
                        var e = N.sort(E),
                            n = v.toLowerCase().split(/\s+/).filter((function(e) {
                                return e.length > 0
                            }));
                        return n.length > 1 ? e : [].concat(Object(ce.a)(T ? [T] : []), Object(ce.a)(e.filter((function(e) {
                            var t;
                            return (null === (t = e.symbol) || void 0 === t ? void 0 : t.toLowerCase()) === n[0]
                        }))), Object(ce.a)(e.filter((function(e) {
                            var t;
                            return (null === (t = e.symbol) || void 0 === t ? void 0 : t.toLowerCase()) !== n[0]
                        }))))
                    }), [N, v, T, E]),
                    R = Object(a.useCallback)((function(e) {
                        if (t(e), c(), A) {
                            var n = document.getElementById("bgMusic");
                            n && n.play()
                        }
                    }), [c, t, A]);
                Object(a.useEffect)((function() {
                    u && y("")
                }), [u]);
                var _ = Object(a.useRef)(),
                    P = Object(a.useCallback)((function(e) {
                        var n, t = e.target.value,
                            r = Qn(t);
                        y(r || t), null === (n = b.current) || void 0 === n || n.scrollTo(0)
                    }), []),
                    B = Object(a.useCallback)((function(e) {
                        if ("Enter" === e.key)
                            if ("eth" === v.toLowerCase().trim()) R(U.d);
                            else if (S.length > 0) {
                            var n;
                            (null === (n = S[0].symbol) || void 0 === n ? void 0 : n.toLowerCase()) !== v.trim().toLowerCase() && 1 !== S.length || R(S[0])
                        }
                    }), [S, R, v]);
                ! function() {
                    var e, n, t = Vr(),
                        r = Object(h.d)((function(e) {
                            return e.lists.byUrl
                        })),
                        a = t ? r[t] : void 0;
                    e = null === a || void 0 === a ? void 0 : a.current, n = null === a || void 0 === a ? void 0 : a.pendingUpdate, null === a || void 0 === a || a.loadingRequestId
                }();
                return Object(r.jsxs)(Ge, {
                    style: {
                        width: "100%",
                        flex: "1 1"
                    },
                    children: [Object(r.jsxs)(ho, {
                        gap: "14px",
                        children: [Object(r.jsxs)(Un, {
                            children: [Object(r.jsxs)(s.v, {
                                children: [Object(r.jsx)(Ar, {
                                    translationId: 82,
                                    children: "Select a token"
                                }), Object(r.jsx)(Ki, {
                                    text: Ir(130, "Find a token by searching for its name or symbol or by pasting its address below.")
                                })]
                            }), Object(r.jsx)(s.j, {
                                onClick: c
                            })]
                        }), Object(r.jsx)(yo, {
                            type: "text",
                            id: "token-search-input",
                            placeholder: d("tokenSearchPlaceholder"),
                            value: v,
                            ref: _,
                            onChange: P,
                            onKeyDown: B
                        }), o && Object(r.jsx)(oo, {
                            chainId: p,
                            onSelect: R,
                            selectedCurrency: n
                        }), Object(r.jsxs)(Un, {
                            children: [Object(r.jsx)(s.v, {
                                fontSize: "14px",
                                children: Object(r.jsx)(Ar, {
                                    translationId: 126,
                                    children: "Token name"
                                })
                            }), Object(r.jsx)(Mo, {
                                ascending: g,
                                toggleSortOrder: function() {
                                    return w((function(e) {
                                        return !e
                                    }))
                                }
                            })]
                        })]
                    }), Object(r.jsx)(Oo, {}), Object(r.jsx)("div", {
                        style: {
                            flex: "1"
                        },
                        children: Object(r.jsx)(fi.a, {
                            disableWidth: !0,
                            children: function(e) {
                                var t = e.height;
                                return Object(r.jsx)(Uo, {
                                    height: t,
                                    showETH: I,
                                    currencies: S,
                                    onCurrencySelect: R,
                                    otherCurrency: i,
                                    selectedCurrency: n,
                                    fixedListRef: b
                                })
                            }
                        })
                    }), null]
                })
            }

            function zo() {
                return (zo = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Yo(e, n) {
                if (null == e) return {};
                var t, r, a = function(e, n) {
                    if (null == e) return {};
                    var t, r, a = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || (a[t] = e[t]);
                    return a
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t])
                }
                return a
            }
            var qo = a.createElement("path", {
                stroke: "#AEAEAE",
                d: "M0.97168 1L6.20532 6L11.439 1"
            });

            function Fo(e, n) {
                var t = e.title,
                    r = e.titleId,
                    i = Yo(e, ["title", "titleId"]);
                return a.createElement("svg", zo({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 12,
                    height: 7,
                    fill: "none",
                    viewBox: "0 0 12 7",
                    ref: n,
                    "aria-labelledby": r
                }, i), t ? a.createElement("title", {
                    id: r
                }, t) : null, qo)
            }
            var Vo = a.forwardRef(Fo),
                Wo = (t.p, t(241)),
                Ho = t(242),
                Qo = t.n(Ho),
                Go = "pancakeswap",
                Ko = [Go],
                Jo = t(142),
                Xo = new Qo.a({
                    allErrors: !0
                }).compile(Wo);

            function Zo(e, n) {
                return $o.apply(this, arguments)
            }

            function $o() {
                return ($o = Object(E.a)(I.a.mark((function e(n, t) {
                    var r, a, i, o, c, s, u, l, d, p, b, f, j;
                    return I.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n !== Go) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", Jo);
                            case 2:
                                if (!(r = gi(n))) {
                                    e.next = 25;
                                    break
                                }
                                return e.prev = 4, e.next = 7, t(r.ensName);
                            case 7:
                                o = e.sent, e.next = 14;
                                break;
                            case 10:
                                throw e.prev = 10, e.t0 = e.catch(4), console.error("Failed to resolve ENS name: ".concat(r.ensName), e.t0), new Error("Failed to resolve ENS name: ".concat(r.ensName));
                            case 14:
                                e.prev = 14, c = Oi(o), e.next = 22;
                                break;
                            case 18:
                                throw e.prev = 18, e.t1 = e.catch(14), console.error("Failed to translate contenthash to URI", o), new Error("Failed to translate contenthash to URI: ".concat(o));
                            case 22:
                                a = wi("".concat(c).concat(null !== (i = r.ensPath) && void 0 !== i ? i : "")), e.next = 26;
                                break;
                            case 25:
                                a = wi(n);
                            case 26:
                                s = 0;
                            case 27:
                                if (!(s < a.length)) {
                                    e.next = 57;
                                    break
                                }
                                return u = a[s], l = s === a.length - 1, d = void 0, e.prev = 31, e.next = 34, fetch(u);
                            case 34:
                                d = e.sent, e.next = 43;
                                break;
                            case 37:
                                if (e.prev = 37, e.t2 = e.catch(31), console.error("Failed to fetch list", n, e.t2), !l) {
                                    e.next = 42;
                                    break
                                }
                                throw new Error("Failed to download list ".concat(n));
                            case 42:
                                return e.abrupt("continue", 54);
                            case 43:
                                if (d.ok) {
                                    e.next = 47;
                                    break
                                }
                                if (!l) {
                                    e.next = 46;
                                    break
                                }
                                throw new Error("Failed to download list ".concat(n));
                            case 46:
                                return e.abrupt("continue", 54);
                            case 47:
                                return e.next = 49, d.json();
                            case 49:
                                if (p = e.sent, Xo(p)) {
                                    e.next = 53;
                                    break
                                }
                                throw j = null !== (b = null === (f = Xo.errors) || void 0 === f ? void 0 : f.reduce((function(e, n) {
                                    var t, r = "".concat(n.dataPath, " ").concat(null !== (t = n.message) && void 0 !== t ? t : "");
                                    return e.length > 0 ? "".concat(e, "; ").concat(r) : "".concat(r)
                                }), "")) && void 0 !== b ? b : "unknown error", new Error("Token list failed validation: ".concat(j));
                            case 53:
                                return e.abrupt("return", p);
                            case 54:
                                s++, e.next = 27;
                                break;
                            case 57:
                                throw new Error("Unrecognized list URL protocol.");
                            case 58:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [4, 10],
                        [14, 18],
                        [31, 37]
                    ])
                })))).apply(this, arguments)
            }
            var ec = [{
                    constant: !0,
                    inputs: [{
                        name: "node",
                        type: "bytes32"
                    }],
                    name: "resolver",
                    outputs: [{
                        name: "resolverAddress",
                        type: "address"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }],
                nc = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                tc = [{
                    constant: !0,
                    inputs: [{
                        internalType: "bytes32",
                        name: "node",
                        type: "bytes32"
                    }],
                    name: "contenthash",
                    outputs: [{
                        internalType: "bytes",
                        name: "",
                        type: "bytes"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }];

            function rc(e, n) {
                return new qn.a(e, tc, n)
            }

            function ac(e, n) {
                return ic.apply(this, arguments)
            }

            function ic() {
                return (ic = Object(E.a)(I.a.mark((function e(n, t) {
                    var r, a, i;
                    return I.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = new qn.a(nc, ec, t), a = Object(Ci.namehash)(n), e.next = 4, r.resolver(a);
                            case 4:
                                return i = e.sent, e.abrupt("return", rc(i, t).contenthash(a));
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function oc() {
                var e = Ue(),
                    n = e.chainId,
                    t = e.library,
                    r = Object(h.c)(),
                    i = Object(a.useCallback)((function(e) {
                        if (!t || n !== U.a.MAINNET) {
                            if (ee === U.a.MAINNET) {
                                var r = function() {
                                    var e;
                                    return ne = null !== (e = ne) && void 0 !== e ? e : new x.a(te.provider)
                                }();
                                if (r) return ac(e, r)
                            }
                            throw new Error("Could not construct mainnet ENS resolver")
                        }
                        return ac(e, t)
                    }), [n, t]);
                return Object(a.useCallback)(function() {
                    var e = Object(E.a)(I.a.mark((function e(n) {
                        var t;
                        return I.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = Object(_e.e)(), r(Ze.pending({
                                        requestId: t,
                                        url: n
                                    })), e.abrupt("return", Zo(n, i).then((function(e) {
                                        return r(Ze.fulfilled({
                                            url: n,
                                            tokenList: e,
                                            requestId: t
                                        })), e
                                    })).catch((function(e) {
                                        throw console.error("Failed to get list at url ".concat(n), e), r(Ze.rejected({
                                            url: n,
                                            requestId: t,
                                            errorMessage: e.message
                                        })), e
                                    })));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(), [r, i])
            }

            function cc(e, n) {
                var t = Object(a.useRef)(n);
                Object(a.useEffect)((function() {
                    t.current = n
                }), [n]), Object(a.useEffect)((function() {
                    var n = function(n) {
                        var r, a;
                        null !== (r = null === (a = e.current) || void 0 === a ? void 0 : a.contains(n.target)) && void 0 !== r && r || t.current && t.current()
                    };
                    return document.addEventListener("mousedown", n),
                        function() {
                            document.removeEventListener("mousedown", n)
                        }
                }), [e])
            }

            function sc() {
                var e = Object(u.a)(["\n  flex: 1;\n  overflow: auto;\n"]);
                return sc = function() {
                    return e
                }, e
            }

            function uc() {
                var e = Object(u.a)(["\n  max-width: 160px;\n  opacity: 0.6;\n  margin-right: 0.5rem;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);
                return uc = function() {
                    return e
                }, e
            }

            function lc() {
                var e = Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: none;\n"]);
                return lc = function() {
                    return e
                }, e
            }

            function dc() {
                var e = Object(u.a)(["\n  z-index: 100;\n  visibility: ", ";\n  opacity: ", ";\n  transition: visibility 150ms linear, opacity 150ms linear;\n  background: ", ";\n  border: 1px solid ", ";\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n  color: ", ";\n  border-radius: 0.5rem;\n  padding: 1rem;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-gap: 8px;\n  font-size: 1rem;\n  text-align: left;\n"]);
                return dc = function() {
                    return e
                }, e
            }

            function pc() {
                var e = Object(u.a)(["\n  padding: 0;\n  font-size: 1rem;\n  opacity: ", ";\n"]);
                return pc = function() {
                    return e
                }, e
            }
            var bc = Cn.error,
                fc = Object(l.default)(mn)(pc(), (function(e) {
                    return e.disabled ? "0.4" : "1"
                })),
                jc = l.default.div(dc(), (function(e) {
                    return e.show ? "visible" : "hidden"
                }), (function(e) {
                    return e.show ? 1 : 0
                }), (function(e) {
                    return e.theme.colors.invertedContrast
                }), (function(e) {
                    return e.theme.colors.tertiary
                }), (function(e) {
                    return e.theme.colors.textSubtle
                })),
                mc = l.default.div(lc()),
                hc = l.default.div(uc());

            function vc(e) {
                var n = e.listUrl,
                    t = Object(a.useMemo)((function() {
                        var e;
                        return null === (e = gi(n)) || void 0 === e ? void 0 : e.ensName
                    }), [n]),
                    i = Object(a.useMemo)((function() {
                        if (!t) {
                            var e = n.toLowerCase();
                            if (e.startsWith("ipfs://") || e.startsWith("ipns://")) return n;
                            try {
                                return new URL(n).host
                            } catch (r) {
                                return
                            }
                        }
                    }), [n, t]);
                return Object(r.jsx)(r.Fragment, {
                    children: null !== t && void 0 !== t ? t : i
                })
            }

            function yc(e) {
                return "list-row-".concat(e.replace(/\./g, "-"))
            }
            var Oc = Object(a.memo)((function(e) {
                    var n = e.listUrl,
                        t = e.onBack,
                        i = Object(h.d)((function(e) {
                            return e.lists.byUrl
                        })),
                        o = Vr(),
                        c = Object(h.c)(),
                        u = i[n],
                        l = u.current,
                        d = u.pendingUpdate,
                        p = n === o,
                        b = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                n = Object(a.useState)(e),
                                t = Object(f.a)(n, 2),
                                r = t[0],
                                i = t[1],
                                o = Object(a.useCallback)((function() {
                                    return i((function(e) {
                                        return !e
                                    }))
                                }), []);
                            return [r, o]
                        }(!1),
                        j = Object(f.a)(b, 2),
                        m = j[0],
                        v = j[1],
                        y = Object(a.useRef)(),
                        O = Object(a.useState)(),
                        x = Object(f.a)(O, 2),
                        g = x[0],
                        w = x[1],
                        C = Object(a.useState)(),
                        k = Object(f.a)(C, 2),
                        T = k[0],
                        I = k[1],
                        E = Object(Ui.a)(g, T, {
                            placement: "auto",
                            strategy: "fixed",
                            modifiers: [{
                                name: "offset",
                                options: {
                                    offset: [8, 8]
                                }
                            }]
                        }),
                        A = E.styles,
                        N = E.attributes;
                    cc(y, m ? v : void 0);
                    var S = Object(a.useCallback)((function() {
                            p || (c(tn(n)), t())
                        }), [c, p, n, t]),
                        R = Object(a.useCallback)((function() {
                            d && c($e(n))
                        }), [c, n, d]),
                        U = Object(a.useCallback)((function() {
                            "REMOVE" === window.prompt("Please confirm you would like to remove this list by typing REMOVE") && c(nn(n))
                        }), [c, n]);
                    return l ? Object(r.jsxs)(Mn, {
                        align: "center",
                        padding: "16px",
                        id: yc(n),
                        children: [l.logoURI ? Object(r.jsx)(Ri, {
                            style: {
                                marginRight: "1rem"
                            },
                            logoURI: l.logoURI,
                            alt: "".concat(l.name, " list logo")
                        }) : Object(r.jsx)("div", {
                            style: {
                                width: "24px",
                                height: "24px",
                                marginRight: "1rem"
                            }
                        }), Object(r.jsxs)(Ge, {
                            style: {
                                flex: "1"
                            },
                            children: [Object(r.jsx)(Mn, {
                                children: Object(r.jsx)(s.v, {
                                    bold: p,
                                    fontSize: "16px",
                                    style: {
                                        overflow: "hidden",
                                        textOverflow: "ellipsis"
                                    },
                                    children: l.name
                                })
                            }), Object(r.jsx)(Mn, {
                                style: {
                                    marginTop: "4px"
                                },
                                children: Object(r.jsx)(hc, {
                                    title: n,
                                    children: Object(r.jsx)(vc, {
                                        listUrl: n
                                    })
                                })
                            })]
                        }), Object(r.jsxs)(mc, {
                            ref: y,
                            children: [Object(r.jsx)("div", {
                                style: {
                                    display: "inline-block"
                                },
                                ref: w,
                                children: Object(r.jsx)(s.c, {
                                    style: {
                                        width: "32px",
                                        marginRight: "8px"
                                    },
                                    onClick: v,
                                    variant: "secondary",
                                    children: Object(r.jsx)(Vo, {})
                                })
                            }), m && Object(r.jsxs)(jc, Object(V.a)(Object(V.a)({
                                show: !0,
                                ref: I,
                                style: A.popper
                            }, N.popper), {}, {
                                children: [Object(r.jsx)("div", {
                                    children: l && kn(l.version)
                                }), Object(r.jsx)(xo, {}), Object(r.jsx)(yn, {
                                    href: "https://tokenlists.org/token-list?url=".concat(n),
                                    children: "View list"
                                }), Object(r.jsx)(fc, {
                                    onClick: U,
                                    disabled: 1 === Object.keys(i).length,
                                    children: "Remove list"
                                }), d && Object(r.jsx)(fc, {
                                    onClick: R,
                                    children: "Update list"
                                })]
                            }))]
                        }), p ? Object(r.jsx)(s.c, {
                            disabled: !0,
                            style: {
                                width: "5rem",
                                minWidth: "5rem"
                            },
                            children: "Selected"
                        }) : Object(r.jsx)(r.Fragment, {
                            children: Object(r.jsx)(s.c, {
                                className: "select-button",
                                style: {
                                    width: "5rem",
                                    minWidth: "4.5rem"
                                },
                                onClick: S,
                                children: "Select"
                            })
                        })]
                    }, n) : null
                })),
                xc = l.default.div(sc());

            function gc(e) {
                var n, t = e.onDismiss,
                    i = e.onBack,
                    o = Object(a.useState)(""),
                    c = Object(f.a)(o, 2),
                    u = c[0],
                    l = c[1],
                    d = Object(h.c)(),
                    p = Object(h.d)((function(e) {
                        return e.lists.byUrl
                    })),
                    b = Boolean(null === (n = p[u]) || void 0 === n ? void 0 : n.loadingRequestId),
                    j = Object(a.useState)(null),
                    m = Object(f.a)(j, 2),
                    v = m[0],
                    y = m[1],
                    O = Object(a.useCallback)((function(e) {
                        l(e.target.value), y(null)
                    }), []),
                    x = oc(),
                    g = Object(a.useCallback)((function() {
                        b || (y(null), x(u).then((function() {
                            l("")
                        })).catch((function(e) {
                            y(e.message), d(nn(u))
                        })))
                    }), [b, d, x, u]),
                    w = Object(a.useMemo)((function() {
                        return wi(u).length > 0 || Boolean(gi(u))
                    }), [u]),
                    C = Object(a.useCallback)((function(e) {
                        w && "Enter" === e.key && g()
                    }), [g, w]),
                    k = Object(a.useMemo)((function() {
                        return Object.keys(p).filter((function(e) {
                            return Boolean(p[e].current)
                        })).sort((function(e, n) {
                            var t = p[e].current,
                                r = p[n].current;
                            return t && r ? t.name.toLowerCase() < r.name.toLowerCase() ? -1 : t.name.toLowerCase() === r.name.toLowerCase() ? 0 : 1 : t ? -1 : r ? 1 : 0
                        }))
                    }), [p]);
                return Object(r.jsxs)(Ge, {
                    style: {
                        width: "100%",
                        flex: "1 1"
                    },
                    children: [Object(r.jsx)(ho, {
                        children: Object(r.jsxs)(Un, {
                            children: [Object(r.jsx)("div", {
                                children: Object(r.jsx)(on.a, {
                                    style: {
                                        cursor: "pointer"
                                    },
                                    onClick: i
                                })
                            }), Object(r.jsx)(s.v, {
                                fontSize: "20px",
                                children: "Manage Lists"
                            }), Object(r.jsx)(jn, {
                                onClick: t
                            })]
                        })
                    }), Object(r.jsx)(Oo, {}), Object(r.jsxs)(ho, {
                        gap: "14px",
                        children: [Object(r.jsxs)(s.v, {
                            bold: !0,
                            children: ["Add a list", " ", Object(r.jsx)(Ki, {
                                text: "Token lists are an open specification for lists of BEP20 tokens. You can use any token list by entering its URL below. Beware that third party token lists can contain fake or malicious BEP20 tokens."
                            })]
                        }), Object(r.jsxs)(Mn, {
                            children: [Object(r.jsx)(yo, {
                                type: "text",
                                id: "list-add-input",
                                placeholder: "https:// or ipfs:// or ENS name",
                                value: u,
                                onChange: O,
                                onKeyDown: C,
                                style: {
                                    height: "2.75rem",
                                    borderRadius: 12,
                                    padding: "12px"
                                }
                            }), Object(r.jsx)(s.c, {
                                onClick: g,
                                style: {
                                    maxWidth: "4em",
                                    marginLeft: "1em"
                                },
                                disabled: !w,
                                children: "Add"
                            })]
                        }), v ? Object(r.jsx)(bc, {
                            title: v,
                            style: {
                                textOverflow: "ellipsis",
                                overflow: "hidden"
                            },
                            error: !0,
                            children: v
                        }) : null]
                    }), Object(r.jsx)(Oo, {}), Object(r.jsx)(xc, {
                        children: k.map((function(e) {
                            return Object(r.jsx)(Oc, {
                                listUrl: e,
                                onBack: i
                            }, e)
                        }))
                    }), Object(r.jsx)(Oo, {}), Object(r.jsx)("div", {
                        style: {
                            padding: "16px",
                            textAlign: "center"
                        },
                        children: Object(r.jsx)(yn, {
                            href: "https://tokenlists.org",
                            children: "Browse lists"
                        })
                    })]
                })
            }

            function wc(e) {
                var n = e.isOpen,
                    t = e.onDismiss,
                    i = e.onCurrencySelect,
                    o = e.selectedCurrency,
                    c = e.otherSelectedCurrency,
                    s = Object(a.useState)(!1),
                    u = Object(f.a)(s, 2),
                    l = u[0],
                    d = u[1],
                    p = pi(n);
                Object(a.useEffect)((function() {
                    n && !p && d(!1)
                }), [n, p]);
                var b = Object(a.useCallback)((function(e) {
                        i(e), t()
                    }), [t, i]),
                    j = Object(a.useCallback)((function() {
                        d(!0)
                    }), []),
                    m = Object(a.useCallback)((function() {
                        d(!1)
                    }), []),
                    h = !Vr();
                return Object(r.jsx)(er, {
                    isOpen: n,
                    onDismiss: t,
                    maxHeight: 90,
                    minHeight: l ? 40 : h ? 0 : 80,
                    children: l ? Object(r.jsx)(gc, {
                        onDismiss: t,
                        onBack: m
                    }) : Object(r.jsx)(Do, {
                        isOpen: n,
                        onDismiss: t,
                        onCurrencySelect: b,
                        onChangeList: j,
                        selectedCurrency: o,
                        otherSelectedCurrency: c,
                        showCommonBases: !1
                    })
                })
            }

            function Cc() {
                var e = Object(u.a)(["\n  position: absolute;\n  left: ", ";\n"]);
                return Cc = function() {
                    return e
                }, e
            }

            function kc() {
                var e = Object(u.a)(["\n  z-index: 2;\n"]);
                return kc = function() {
                    return e
                }, e
            }

            function Tc() {
                var e = Object(u.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  margin-right: ", ";\n"]);
                return Tc = function() {
                    return e
                }, e
            }
            var Ic = l.default.div(Tc(), (function(e) {
                    var n = e.sizeraw;
                    return e.margin && "".concat((n / 3 + 8).toString(), "px")
                })),
                Ec = Object(l.default)(ro)(kc()),
                Ac = Object(l.default)(ro)(Cc(), (function(e) {
                    var n = e.sizeraw;
                    return "".concat((n / 2).toString(), "px")
                }));

            function Nc(e) {
                var n = e.currency0,
                    t = e.currency1,
                    a = e.size,
                    i = void 0 === a ? 16 : a,
                    o = e.margin,
                    c = void 0 !== o && o;
                return Object(r.jsxs)(Ic, {
                    sizeraw: i,
                    margin: c,
                    children: [n && Object(r.jsx)(Ec, {
                        currency: n,
                        size: "".concat(i.toString(), "px")
                    }), t && Object(r.jsx)(Ac, {
                        currency: t,
                        size: "".concat(i.toString(), "px"),
                        sizeraw: i
                    })]
                })
            }

            function Sc() {
                var e = Object(u.a)(["\n  color: ", ";\n  width: 0;\n  position: relative;\n  font-weight: 500;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: transparent;\n  font-size: 16px;\n  text-align: ", ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  [type='number'] {\n    -moz-appearance: textfield;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"]);
                return Sc = function() {
                    return e
                }, e
            }
            var Rc = l.default.input(Sc(), (function(e) {
                    var n = e.error,
                        t = e.theme;
                    return n ? t.colors.failure : t.colors.text
                }), (function(e) {
                    var n = e.align;
                    return n && n
                }), (function(e) {
                    return e.theme.colors.textSubtle
                })),
                Uc = RegExp("^\\d*(?:\\\\[.])?\\d*$"),
                _c = i.a.memo((function(e) {
                    var n = e.value,
                        t = e.onUserInput,
                        a = e.placeholder,
                        i = Object(rn.a)(e, ["value", "onUserInput", "placeholder"]);
                    return Object(r.jsx)(Rc, Object(V.a)(Object(V.a)({}, i), {}, {
                        value: n,
                        onChange: function(e) {
                            var n;
                            ("" === (n = e.target.value.replace(/,/g, ".")) || Uc.test(n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))) && t(n)
                        },
                        inputMode: "decimal",
                        title: "Token Amount",
                        autoComplete: "off",
                        autoCorrect: "off",
                        type: "text",
                        pattern: "^[0-9]*[.,]?[0-9]*$",
                        placeholder: a || "0.0",
                        minLength: 1,
                        maxLength: 79,
                        spellCheck: "false"
                    }))
                }));

            function Pc() {
                var e = Object(u.a)(["\n  border-radius: 16px;\n  background-color: ", ";\n  box-shadow: ", ";\n"]);
                return Pc = function() {
                    return e
                }, e
            }

            function Bc() {
                var e = Object(u.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: ", ";\n  background-color: ", ";\n  z-index: 1;\n"]);
                return Bc = function() {
                    return e
                }, e
            }

            function Mc() {
                var e = Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);
                return Mc = function() {
                    return e
                }, e
            }

            function Lc() {
                var e = Object(u.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  color: ", ";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem 0 1rem;\n  span:hover {\n    cursor: pointer;\n    color: ", ";\n  }\n"]);
                return Lc = function() {
                    return e
                }, e
            }

            function Dc() {
                var e = Object(u.a)(["\n  align-items: center;\n  height: 34px;\n  font-size: 16px;\n  font-weight: 500;\n  background-color: transparent;\n  color: ", ";\n  border-radius: 12px;\n  outline: none;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  padding: 0 0.5rem;\n\n  :focus,\n  :hover {\n    background-color: ", ";\n  }\n"]);
                return Dc = function() {
                    return e
                }, e
            }

            function zc() {
                var e = Object(u.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: ", ";\n"]);
                return zc = function() {
                    return e
                }, e
            }
            var Yc = l.default.div(zc(), (function(e) {
                    return e.selected ? "0.75rem 0.5rem 0.75rem 1rem" : "0.75rem 0.75rem 0.75rem 1rem"
                })),
                qc = l.default.button(Dc(), (function(e) {
                    var n = e.selected,
                        t = e.theme;
                    return n ? t.colors.text : "#FFFFFF"
                }), (function(e) {
                    var n = e.theme;
                    return Object(an.a)(.05, n.colors.input)
                })),
                Fc = l.default.div(Lc(), (function(e) {
                    return e.theme.colors.text
                }), (function(e) {
                    var n = e.theme;
                    return Object(an.a)(.2, n.colors.textSubtle)
                })),
                Vc = l.default.span(Mc()),
                Wc = l.default.div(Bc(), (function(e) {
                    return e.hideInput ? "8px" : "20px"
                }), (function(e) {
                    return e.theme.colors.background
                })),
                Hc = l.default.div(Pc(), (function(e) {
                    return e.theme.colors.input
                }), (function(e) {
                    return e.theme.shadows.inset
                }));

            function Qc(e) {
                var n = e.value,
                    t = e.onUserInput,
                    i = e.onMax,
                    o = e.showMaxButton,
                    c = e.label,
                    u = void 0 === c ? Ir(132, "Input") : c,
                    l = e.onCurrencySelect,
                    d = e.currency,
                    p = e.disableCurrencySelect,
                    b = void 0 !== p && p,
                    j = e.hideBalance,
                    m = void 0 !== j && j,
                    h = e.pair,
                    v = void 0 === h ? null : h,
                    y = e.hideInput,
                    O = void 0 !== y && y,
                    x = e.otherCurrency,
                    g = e.id,
                    w = e.showCommonBases,
                    C = Object(a.useState)(!1),
                    k = Object(f.a)(C, 2),
                    T = k[0],
                    I = k[1],
                    E = Ue().account,
                    A = di(null !== E && void 0 !== E ? E : void 0, null !== d && void 0 !== d ? d : void 0),
                    N = Object(a.useCallback)((function() {
                        I(!1)
                    }), [I]);
                return Object(r.jsxs)(Wc, {
                    id: g,
                    children: [Object(r.jsxs)(Hc, {
                        hideInput: O,
                        children: [!O && Object(r.jsx)(Fc, {
                            children: Object(r.jsxs)(Un, {
                                children: [Object(r.jsx)(s.v, {
                                    fontSize: "14px",
                                    children: u
                                }), E && Object(r.jsx)(s.v, {
                                    onClick: i,
                                    fontSize: "14px",
                                    style: {
                                        display: "inline",
                                        cursor: "pointer"
                                    },
                                    children: !m && d && A ? "Balance: ".concat(null === A || void 0 === A ? void 0 : A.toSignificant(6)) : " -"
                                })]
                            })
                        }), Object(r.jsxs)(Yc, {
                            style: O ? {
                                padding: "0",
                                borderRadius: "8px"
                            } : {},
                            selected: b,
                            children: [!O && Object(r.jsxs)(r.Fragment, {
                                children: [Object(r.jsx)(_c, {
                                    className: "token-amount-input",
                                    value: n,
                                    onUserInput: function(e) {
                                        t(e)
                                    }
                                }), E && d && o && "To" !== u && Object(r.jsx)(s.c, {
                                    onClick: i,
                                    size: "sm",
                                    variant: "text",
                                    children: "MAX"
                                })]
                            }), Object(r.jsx)(qc, {
                                selected: !!d,
                                className: "open-currency-select-button",
                                onClick: function() {
                                    b || I(!0)
                                },
                                children: Object(r.jsxs)(Vc, {
                                    children: [v ? Object(r.jsx)(Nc, {
                                        currency0: v.token0,
                                        currency1: v.token1,
                                        size: 16,
                                        margin: !0
                                    }) : d ? Object(r.jsx)(ro, {
                                        currency: d,
                                        size: "24px",
                                        style: {
                                            marginRight: "8px"
                                        }
                                    }) : null, v ? Object(r.jsxs)(s.v, {
                                        children: [null === v || void 0 === v ? void 0 : v.token0.symbol, ":", null === v || void 0 === v ? void 0 : v.token1.symbol]
                                    }) : Object(r.jsx)(s.v, {
                                        children: (d && d.symbol && d.symbol.length > 20 ? "".concat(d.symbol.slice(0, 4), "...").concat(d.symbol.slice(d.symbol.length - 5, d.symbol.length)) : null === d || void 0 === d ? void 0 : d.symbol) || Object(r.jsx)(Ar, {
                                            translationId: 82,
                                            children: "Select a currency"
                                        })
                                    }), !b && Object(r.jsx)(s.i, {})]
                                })
                            })]
                        })]
                    }), !b && l && Object(r.jsx)(wc, {
                        isOpen: T,
                        onDismiss: N,
                        onCurrencySelect: l,
                        selectedCurrency: d,
                        otherSelectedCurrency: x,
                        showCommonBases: w
                    })]
                })
            }

            function Gc() {
                var e = Object(u.a)(["\n  color: ", ";\n"]);
                return Gc = function() {
                    return e
                }, e
            }

            function Kc() {
                var e = Object(u.a)(["\n  font-weight: 500;\n  font-size: 20px;\n"]);
                return Kc = function() {
                    return e
                }, e
            }

            function Jc() {
                var e = Object(u.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n  height: 3rem;\n  border-radius: 3rem;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  color: ", ";\n  font-size: 20px;\n\n  &.", " {\n    border-radius: 12px;\n    font-weight: 500;\n    color: ", ";\n  }\n\n  :hover,\n  :focus {\n    color: ", ";\n  }\n"]);
                return Jc = function() {
                    return e
                }, e
            }

            function Xc() {
                var e = Object(u.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n  height: 3rem;\n  border-radius: 3rem;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  color: ", ";\n  font-size: 20px;\n\n  &.", " {\n    border-radius: 12px;\n    font-weight: 500;\n    color: ", ";\n  }\n\n  :hover,\n  :focus {\n    color: ", ";\n  }\n"]);
                return Xc = function() {
                    return e
                }, e
            }

            function Zc() {
                var e = Object(u.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  border-radius: 3rem;\n  justify-content: space-evenly;\n"]);
                return Zc = function() {
                    return e
                }, e
            }
            var $c = l.default.div(Zc()),
                es = "ACTIVE",
                ns = (l.default.a(Xc(), (function(e) {
                    return e.theme.colors.textDisabled
                }), es, (function(e) {
                    return e.theme.colors.text
                }), (function(e) {
                    var n = e.theme;
                    return Object(an.a)(.1, n.colors.text)
                })), Object(l.default)(j.c).attrs({
                    activeClassName: es
                })(Jc(), (function(e) {
                    return e.theme.colors.textDisabled
                }), es, (function(e) {
                    return e.theme.colors.text
                }), (function(e) {
                    var n = e.theme;
                    return Object(an.a)(.1, n.colors.text)
                })), l.default.div(Kc())),
                ts = Object(l.default)(on.a)(Gc(), (function(e) {
                    return e.theme.colors.text
                }));

            function rs() {
                return Object(r.jsx)($c, {
                    children: Object(r.jsxs)(Un, {
                        style: {
                            padding: "1rem"
                        },
                        children: [Object(r.jsx)(j.b, {
                            to: "/pool",
                            children: Object(r.jsx)(ts, {})
                        }), Object(r.jsx)(ns, {
                            children: "Import Pool"
                        }), Object(r.jsx)(Ki, {
                            text: "Use this tool to find pairs that don't automatically appear in the interface."
                        })]
                    })
                })
            }

            function as(e) {
                var n = e.adding;
                return Object(r.jsx)($c, {
                    children: Object(r.jsxs)(Un, {
                        style: {
                            padding: "1rem"
                        },
                        children: [Object(r.jsx)(j.b, {
                            to: "/pool",
                            children: Object(r.jsx)(ts, {})
                        }), Object(r.jsxs)(ns, {
                            children: [n ? "Add" : "Remove", " Liquidity"]
                        }), Object(r.jsx)(Ki, {
                            text: n ? "When you add liquidity, you are given pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time." : "Removing pool tokens converts your position back into underlying tokens at the current rate, proportional to your share of the pool. Accrued fees are included in the amounts you receive."
                        })]
                    })
                })
            }
            var is = t(436),
                os = t(437);

            function cs(e) {
                var n, t, r = null === (n = da(Xa(null === e || void 0 === e ? void 0 : e.address, !1), "totalSupply")) || void 0 === n || null === (t = n.result) || void 0 === t ? void 0 : t[0];
                return e && r ? new U.m(e, r.toString()) : void 0
            }

            function ss(e) {
                if (e === U.d) return "ETH";
                if (e instanceof U.l) return e.address;
                throw new Error("invalid currency")
            }

            function us(e, n) {
                return n && e === U.d ? U.p[n] : e instanceof U.l ? e : void 0
            }

            function ls(e, n) {
                var t = e && n ? us(e.currency, n) : void 0;
                return t && e ? new U.m(t, e.raw) : void 0
            }

            function ds(e) {
                return e.equals(U.p[e.chainId]) ? U.d : e
            }

            function ps() {
                var e = Object(u.a)(["\n  background-color: ", ";\n  color: ", ";\n  padding: 0.5rem;\n  border-radius: 12px;\n  margin-top: 8px;\n"]);
                return ps = function() {
                    return e
                }, e
            }

            function bs() {
                var e = Object(u.a)(["\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 12px;\n  min-width: 48px;\n  height: 48px;\n"]);
                return bs = function() {
                    return e
                }, e
            }

            function fs() {
                var e = Object(u.a)(["\n  background-color: ", ";\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  width: 100%;\n  padding: 3rem 1.25rem 1rem 1rem;\n  margin-top: -2rem;\n  color: ", ";\n  z-index: -1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n"]);
                return fs = function() {
                    return e
                }, e
            }

            function js() {
                var e = Object(u.a)(["\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n"]);
                return js = function() {
                    return e
                }, e
            }

            function ms() {
                var e = Object(u.a)(["\n  text-overflow: ellipsis;\n  width: 220px;\n  overflow: hidden;\n"]);
                return ms = function() {
                    return e
                }, e
            }

            function hs() {
                var e = Object(u.a)(["\n  height: 22px;\n  width: 22px;\n  background-color: ", ";\n  border: none;\n  border-radius: 50%;\n  padding: 0.2rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-left: 0.4rem;\n  cursor: pointer;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: right;\n\n  :hover {\n    background-color: ", ";\n  }\n  :focus {\n    background-color: ", ";\n    outline: none;\n  }\n"]);
                return hs = function() {
                    return e
                }, e
            }

            function vs() {
                var e = Object(u.a)(["\n  color: ", ";\n"]);
                return vs = function() {
                    return e
                }, e
            }

            function ys() {
                var e = Object(u.a)(["\n  margin-top: 1rem;\n"]);
                return ys = function() {
                    return e
                }, e
            }

            function Os() {
                var e = Object(u.a)(["\n  height: 1px;\n  width: 100%;\n  background-color: ", ";\n"]);
                return Os = function() {
                    return e
                }, e
            }

            function xs() {
                var e = Object(u.a)(["\n          :hover {\n            cursor: pointer;\n            opacity: 0.8;\n          }\n        "]);
                return xs = function() {
                    return e
                }, e
            }

            function gs() {
                var e = Object(u.a)(["\n  padding: 2px;\n\n  ", "\n"]);
                return gs = function() {
                    return e
                }, e
            }

            function ws() {
                var e = Object(u.a)(["\n  position: relative;\n"]);
                return ws = function() {
                    return e
                }, e
            }
            var Cs = l.default.div(ws()),
                ks = l.default.div(gs(), (function(e) {
                    return e.clickable ? Object(l.css)(xs()) : null
                })),
                Ts = l.default.div(Os(), (function(e) {
                    return e.theme.colors.tertiary
                })),
                Is = l.default.div(ys()),
                Es = Object(l.default)(s.v)(vs(), (function(e) {
                    var n = e.theme,
                        t = e.severity;
                    return 3 === t || 4 === t ? n.colors.failure : 2 === t ? n.colors.binance : 1 === t ? n.colors.text : n.colors.success
                })),
                As = l.default.button(hs(), (function(e) {
                    return e.theme.colors.invertedContrast
                }), (function(e) {
                    return e.theme.colors.textSubtle
                }), (function(e) {
                    return e.theme.colors.tertiary
                }), (function(e) {
                    return e.theme.colors.tertiary
                })),
                Ns = (Object(l.default)(s.v)(ms()), l.default.span(js())),
                Ss = l.default.div(fs(), (function(e) {
                    var n = e.theme;
                    return Object(an.b)(.9, n.colors.failure)
                }), (function(e) {
                    return e.theme.colors.failure
                })),
                Rs = l.default.div(bs(), (function(e) {
                    var n = e.theme;
                    return Object(an.b)(.9, n.colors.failure)
                }));

            function Us(e) {
                var n = e.error;
                return Object(r.jsxs)(Ss, {
                    children: [Object(r.jsx)(Rs, {
                        children: Object(r.jsx)(Or.a, {
                            size: 24
                        })
                    }), Object(r.jsx)("p", {
                        children: n
                    })]
                })
            }
            var _s = Object(l.default)(Qe)(ps(), (function(e) {
                var n = e.theme;
                return Object(an.b)(.9, n.colors.primary)
            }), (function(e) {
                return e.theme.colors.primary
            }));

            function Ps() {
                var e = Object(u.a)(["\n  border: 1px solid ", ";\n  :hover {\n    border: 1px solid ", ";\n  }\n"]);
                return Ps = function() {
                    return e
                }, e
            }

            function Bs() {
                var e = Object(u.a)(["\n  height: 24px;\n"]);
                return Bs = function() {
                    return e
                }, e
            }
            var Ms = Object(l.default)(Un)(Bs()),
                Ls = Object(l.default)(zt)(Ps(), (function(e) {
                    return e.theme.colors.invertedContrast
                }), (function(e) {
                    var n = e.theme;
                    return Object(an.a)(.06, n.colors.invertedContrast)
                }));

            function Ds(e) {
                var n = e.pair,
                    t = e.showUnwrapped,
                    i = void 0 !== t && t,
                    o = Ue().account,
                    c = i ? n.token0 : ds(n.token0),
                    u = i ? n.token1 : ds(n.token1),
                    l = Object(a.useState)(!1),
                    d = Object(f.a)(l, 2),
                    p = d[0],
                    b = d[1],
                    j = ui(null !== o && void 0 !== o ? o : void 0, n.liquidityToken),
                    m = cs(n.liquidityToken),
                    h = n && m && j && U.f.greaterThanOrEqual(m.raw, j.raw) ? [n.getLiquidityValue(n.token0, m, j, !1), n.getLiquidityValue(n.token1, m, j, !1)] : [void 0, void 0],
                    v = Object(f.a)(h, 2),
                    y = v[0],
                    O = v[1];
                return Object(r.jsx)(r.Fragment, {
                    children: j && Object(r.jsx)(s.f, {
                        children: Object(r.jsx)(s.g, {
                            children: Object(r.jsxs)(Qe, {
                                gap: "12px",
                                children: [Object(r.jsx)(Ms, {
                                    children: Object(r.jsx)(Bn, {
                                        children: Object(r.jsx)(s.v, {
                                            style: {
                                                textTransform: "uppercase",
                                                fontWeight: 600
                                            },
                                            fontSize: "14px",
                                            color: "textSubtle",
                                            children: "LP Tokens in your Wallet"
                                        })
                                    })
                                }), Object(r.jsxs)(Ms, {
                                    onClick: function() {
                                        return b(!p)
                                    },
                                    children: [Object(r.jsxs)(Bn, {
                                        children: [Object(r.jsx)(Nc, {
                                            currency0: c,
                                            currency1: u,
                                            margin: !0,
                                            size: 20
                                        }), Object(r.jsxs)(s.v, {
                                            fontSize: "14px",
                                            children: [c.symbol, "/", u.symbol]
                                        })]
                                    }), Object(r.jsx)(Bn, {
                                        children: Object(r.jsx)(s.v, {
                                            fontSize: "14px",
                                            children: j ? j.toSignificant(4) : "-"
                                        })
                                    })]
                                }), Object(r.jsxs)(Qe, {
                                    gap: "4px",
                                    children: [Object(r.jsxs)(Ms, {
                                        children: [Object(r.jsxs)(s.v, {
                                            fontSize: "14px",
                                            children: [c.symbol, ":"]
                                        }), y ? Object(r.jsx)(Bn, {
                                            children: Object(r.jsx)(s.v, {
                                                ml: "6px",
                                                fontSize: "14px",
                                                children: null === y || void 0 === y ? void 0 : y.toSignificant(6)
                                            })
                                        }) : "-"]
                                    }), Object(r.jsxs)(Ms, {
                                        children: [Object(r.jsxs)(s.v, {
                                            fontSize: "14px",
                                            children: [u.symbol, ":"]
                                        }), O ? Object(r.jsx)(Bn, {
                                            children: Object(r.jsx)(s.v, {
                                                ml: "6px",
                                                fontSize: "14px",
                                                children: null === O || void 0 === O ? void 0 : O.toSignificant(6)
                                            })
                                        }) : "-"]
                                    })]
                                })]
                            })
                        })
                    })
                })
            }

            function zs(e) {
                var n = e.pair,
                    t = Ue().account,
                    i = ds(n.token0),
                    o = ds(n.token1),
                    c = Object(a.useState)(!1),
                    u = Object(f.a)(c, 2),
                    l = u[0],
                    d = u[1],
                    p = ui(null !== t && void 0 !== t ? t : void 0, n.liquidityToken),
                    b = cs(n.liquidityToken),
                    m = p && b && U.f.greaterThanOrEqual(b.raw, p.raw) ? new U.h(p.raw, b.raw) : void 0,
                    h = n && b && p && U.f.greaterThanOrEqual(b.raw, p.raw) ? [n.getLiquidityValue(n.token0, b, p, !1), n.getLiquidityValue(n.token1, b, p, !1)] : [void 0, void 0],
                    v = Object(f.a)(h, 2),
                    y = v[0],
                    O = v[1];
                return Object(r.jsx)(Ls, {
                    children: Object(r.jsxs)(Qe, {
                        gap: "12px",
                        children: [Object(r.jsxs)(Ms, {
                            onClick: function() {
                                return d(!l)
                            },
                            style: {
                                cursor: "pointer"
                            },
                            children: [Object(r.jsxs)(Bn, {
                                children: [Object(r.jsx)(Nc, {
                                    currency0: i,
                                    currency1: o,
                                    margin: !0,
                                    size: 20
                                }), Object(r.jsx)(s.v, {
                                    children: i && o ? "".concat(i.symbol, "/").concat(o.symbol) : Object(r.jsx)(Ns, {
                                        children: "Loading"
                                    })
                                })]
                            }), Object(r.jsx)(Bn, {
                                children: l ? Object(r.jsx)(is.a, {
                                    size: "20",
                                    style: {
                                        marginLeft: "10px"
                                    }
                                }) : Object(r.jsx)(os.a, {
                                    size: "20",
                                    style: {
                                        marginLeft: "10px"
                                    }
                                })
                            })]
                        }), l && Object(r.jsxs)(Qe, {
                            gap: "8px",
                            children: [Object(r.jsxs)(Ms, {
                                children: [Object(r.jsx)(Bn, {
                                    children: Object(r.jsxs)(s.v, {
                                        children: ["Pooled ", i.symbol, ":"]
                                    })
                                }), y ? Object(r.jsxs)(Bn, {
                                    children: [Object(r.jsx)(s.v, {
                                        ml: "6px",
                                        children: null === y || void 0 === y ? void 0 : y.toSignificant(6)
                                    }), Object(r.jsx)(ro, {
                                        size: "20px",
                                        style: {
                                            marginLeft: "8px"
                                        },
                                        currency: i
                                    })]
                                }) : "-"]
                            }), Object(r.jsxs)(Ms, {
                                children: [Object(r.jsx)(Bn, {
                                    children: Object(r.jsxs)(s.v, {
                                        children: ["Pooled ", o.symbol, ":"]
                                    })
                                }), O ? Object(r.jsxs)(Bn, {
                                    children: [Object(r.jsx)(s.v, {
                                        ml: "6px",
                                        children: null === O || void 0 === O ? void 0 : O.toSignificant(6)
                                    }), Object(r.jsx)(ro, {
                                        size: "20px",
                                        style: {
                                            marginLeft: "8px"
                                        },
                                        currency: o
                                    })]
                                }) : "-"]
                            }), Object(r.jsxs)(Ms, {
                                children: [Object(r.jsx)(s.v, {
                                    children: "Your pool tokens:"
                                }), Object(r.jsx)(s.v, {
                                    children: p ? p.toSignificant(4) : "-"
                                })]
                            }), Object(r.jsxs)(Ms, {
                                children: [Object(r.jsx)(s.v, {
                                    children: "Your pool share:"
                                }), Object(r.jsx)(s.v, {
                                    children: m ? "".concat(m.toFixed(2), "%") : "-"
                                })]
                            }), Object(r.jsxs)(Un, {
                                marginTop: "10px",
                                children: [Object(r.jsx)(s.c, {
                                    as: j.b,
                                    to: "/add/".concat(ss(i), "/").concat(ss(o)),
                                    style: {
                                        width: "48%"
                                    },
                                    children: "Add"
                                }), Object(r.jsx)(s.c, {
                                    as: j.b,
                                    style: {
                                        width: "48%"
                                    },
                                    to: "/remove/".concat(ss(i), "/").concat(ss(o)),
                                    children: "Remove"
                                })]
                            })]
                        })]
                    })
                })
            }
            var Ys, qs = new _r.b(Ma.a);

            function Fs(e) {
                var n = Ue().chainId,
                    t = Object(a.useMemo)((function() {
                        return e.map((function(e) {
                            var t = Object(f.a)(e, 2),
                                r = t[0],
                                a = t[1];
                            return [us(r, n), us(a, n)]
                        }))
                    }), [n, e]),
                    r = la(Object(a.useMemo)((function() {
                        return t.map((function(e) {
                            var n = Object(f.a)(e, 2),
                                t = n[0],
                                r = n[1];
                            return t && r && !t.equals(r) ? U.g.getAddress(t, r) : void 0
                        }))
                    }), [t]), qs, "getReserves");
                return Object(a.useMemo)((function() {
                    return r.map((function(e, n) {
                        var r = e.result,
                            a = e.loading,
                            i = t[n][0],
                            o = t[n][1];
                        if (a) return [Ys.LOADING, null];
                        if (!i || !o || i.equals(o)) return [Ys.INVALID, null];
                        if (!r) return [Ys.NOT_EXISTS, null];
                        var c = r.reserve0,
                            s = r.reserve1,
                            u = i.sortsBefore(o) ? [i, o] : [o, i],
                            l = Object(f.a)(u, 2),
                            d = l[0],
                            p = l[1];
                        return [Ys.EXISTS, new U.g(new U.m(d, c.toString()), new U.m(p, s.toString()))]
                    }))
                }), [r, t])
            }

            function Vs(e, n) {
                return Fs([
                    [e, n]
                ])[0]
            }! function(e) {
                e[e.LOADING = 0] = "LOADING", e[e.NOT_EXISTS = 1] = "NOT_EXISTS", e[e.EXISTS = 2] = "EXISTS", e[e.INVALID = 3] = "INVALID"
            }(Ys || (Ys = {}));
            var Ws = t(428);

            function Hs(e, n, t) {
                var r = da(Xa(null === e || void 0 === e ? void 0 : e.address, !1), "allowance", Object(a.useMemo)((function() {
                    return [n, t]
                }), [n, t])).result;
                return Object(a.useMemo)((function() {
                    return e && r ? new U.m(e, r.toString()) : void 0
                }), [e, r])
            }
            var Qs, Gs = t(143);

            function Ks() {
                var e = Object(m.g)().search;
                return Object(a.useMemo)((function() {
                    return e && e.length > 1 ? Object(Gs.parse)(e, {
                        parseArrays: !1,
                        ignoreQueryPrefix: !0
                    }) : {}
                }), [e])
            }! function(e) {
                e.v1 = "v1", e.v2 = "v2"
            }(Qs || (Qs = {}));
            var Js = Qs.v2;

            function Xs() {
                var e = Ks().use;
                return e && "string" === typeof e ? "v1" === e.toLowerCase() ? Qs.v1 : Js : Qs.v2
            }

            function Zs(e) {
                var n, t;
                return null === (n = da(Ka(), "getExchange", Object(a.useMemo)((function() {
                    return [e]
                }), [e]))) || void 0 === n || null === (t = n.result) || void 0 === t ? void 0 : t[0]
            }
            var $s = function(e) {
                Object(S.a)(t, e);
                var n = Object(R.a)(t);

                function t(e, r) {
                    return Object(A.a)(this, t), n.call(this, r, new U.m(U.p[r.token.chainId], e))
                }
                return t
            }(U.g);

            function eu(e) {
                var n = e instanceof U.l ? e : void 0,
                    t = Zs(Boolean(n && n.equals(U.p[n.chainId])) || null === n || void 0 === n ? void 0 : n.address),
                    r = ui(t, n),
                    i = oi([t])[null !== t && void 0 !== t ? t : ""];
                return Object(a.useMemo)((function() {
                    return n && r && i && e ? new $s(i.raw, r) : void 0
                }), [i, e, n, r])
            }

            function nu() {
                var e = ni(),
                    n = Ka(),
                    t = Object(a.useMemo)((function() {
                        return Object.keys(e).map((function(e) {
                            return [e]
                        }))
                    }), [e]),
                    r = ua(n, "getExchange", t, aa);
                return Object(a.useMemo)((function() {
                    var n;
                    return null !== (n = null === r || void 0 === r ? void 0 : r.reduce((function(n, r, a) {
                        var i = r.result;
                        return (null === i || void 0 === i ? void 0 : i[0]) && i[0] !== Vn.a && (n[i[0]] = e[t[a][0]]), n
                    }), {})) && void 0 !== n ? n : {}
                }), [e, t, r])
            }

            function tu(e) {
                var n, t, r = null === e || void 0 === e || null === (n = e.route) || void 0 === n || null === (t = n.pairs) || void 0 === t ? void 0 : t.some((function(e) {
                    return e instanceof $s
                }));
                return r ? Qs.v1 : !1 === r ? Qs.v2 : void 0
            }

            function ru(e) {
                return Zs(Object(a.useMemo)((function() {
                    if (e && tu(e) === Qs.v1) return e.inputAmount instanceof U.m ? e.inputAmount.token.address : e.outputAmount instanceof U.m ? e.outputAmount.token.address : void 0
                }), [e]))
            }
            var au, iu = new U.h("0"),
                ou = new U.h("1");

            function cu(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : iu;
                if (e && !n) return !1;
                if (n && !e) return !0;
                if (e && n) {
                    if (e.tradeType !== n.tradeType || !Object(U.q)(e.inputAmount.currency, n.inputAmount.currency) || !Object(U.q)(n.outputAmount.currency, n.outputAmount.currency)) throw new Error("Trades are not comparable");
                    return t.equalTo(iu) ? e.executionPrice.lessThan(n.executionPrice) : e.executionPrice.raw.multiply(t.add(ou)).lessThan(n.executionPrice)
                }
            }! function(e) {
                e.INPUT = "INPUT", e.OUTPUT = "OUTPUT"
            }(au || (au = {}));
            var su = Object(_e.b)("swap/selectCurrency"),
                uu = Object(_e.b)("swap/switchCurrencies"),
                lu = Object(_e.b)("swap/typeInput"),
                du = Object(_e.b)("swap/replaceSwapState"),
                pu = Object(_e.b)("swap/setRecipient"),
                bu = Object(_e.b)("transactions/addTransaction"),
                fu = Object(_e.b)("transactions/clearAllTransactions"),
                ju = Object(_e.b)("transactions/finalizeTransaction"),
                mu = Object(_e.b)("transactions/checkedTransaction");

            function hu() {
                var e = Ue(),
                    n = e.chainId,
                    t = e.account,
                    r = Object(h.c)();
                return Object(a.useCallback)((function(e) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = a.summary,
                        o = a.approval;
                    if (t && n) {
                        var c = e.hash;
                        if (!c) throw Error("No transaction hash found.");
                        r(bu({
                            hash: c,
                            from: t,
                            chainId: n,
                            approval: o,
                            summary: i
                        }))
                    }
                }), [r, n, t])
            }

            function vu() {
                var e, n = Ue().chainId,
                    t = Object(h.d)((function(e) {
                        return e.transactions
                    }));
                return n && null !== (e = t[n]) && void 0 !== e ? e : {}
            }

            function yu(e) {
                var n = vu();
                return !(!e || !n[e]) && !n[e].receipt
            }

            function Ou(e) {
                return (new Date).getTime() - e.addedTime < 864e5
            }
            var xu, gu, wu = new U.h(U.f.BigInt(20), U.f.BigInt(1e4)),
                Cu = new U.h(U.f.BigInt(1e4), U.f.BigInt(1e4)),
                ku = Cu.subtract(wu);

            function Tu(e) {
                var n = e ? Cu.subtract(e.route.pairs.reduce((function(e) {
                        return e.multiply(ku)
                    }), Cu)) : void 0,
                    t = e && n ? e.priceImpact.subtract(n) : void 0;
                return {
                    priceImpactWithoutFee: t ? new U.h(null === t || void 0 === t ? void 0 : t.numerator, null === t || void 0 === t ? void 0 : t.denominator) : void 0,
                    realizedLPFee: n && e && (e.inputAmount instanceof U.m ? new U.m(e.inputAmount.token, n.multiply(e.inputAmount.raw).quotient) : U.c.ether(n.multiply(e.inputAmount.raw).quotient))
                }
            }

            function Iu(e, n) {
                var t, r, a = (r = n, new U.h(U.f.BigInt(r), U.f.BigInt(1e4)));
                return t = {}, Object(O.a)(t, au.INPUT, null === e || void 0 === e ? void 0 : e.maximumAmountIn(a)), Object(O.a)(t, au.OUTPUT, null === e || void 0 === e ? void 0 : e.minimumAmountOut(a)), t
            }

            function Eu(e) {
                return (null === e || void 0 === e ? void 0 : e.lessThan(Ne)) ? (null === e || void 0 === e ? void 0 : e.lessThan(Ee)) ? (null === e || void 0 === e ? void 0 : e.lessThan(Ie)) ? (null === e || void 0 === e ? void 0 : e.lessThan(Te)) ? 0 : 1 : 2 : 3 : 4
            }

            function Au(e, n) {
                return e ? n ? "".concat(e.executionPrice.invert().toSignificant(6), " ").concat(e.inputAmount.currency.symbol, " / ").concat(e.outputAmount.currency.symbol) : "".concat(e.executionPrice.toSignificant(6), " ").concat(e.outputAmount.currency.symbol, " / ").concat(e.inputAmount.currency.symbol) : ""
            }

            function Nu(e, n) {
                var t = Ue().account,
                    r = e instanceof U.m ? e.token : void 0,
                    i = Hs(r, null !== t && void 0 !== t ? t : void 0, n),
                    o = function(e, n) {
                        var t = vu();
                        return Object(a.useMemo)((function() {
                            return "string" === typeof e && "string" === typeof n && Object.keys(t).some((function(r) {
                                var a = t[r];
                                if (!a) return !1;
                                if (a.receipt) return !1;
                                var i = a.approval;
                                return !!i && i.spender === n && i.tokenAddress === e && Ou(a)
                            }))
                        }), [t, n, e])
                    }(null === r || void 0 === r ? void 0 : r.address, n),
                    c = Object(a.useMemo)((function() {
                        return e && n ? e.currency === U.d ? xu.APPROVED : i ? i.lessThan(e) ? o ? xu.PENDING : xu.NOT_APPROVED : xu.APPROVED : xu.UNKNOWN : xu.UNKNOWN
                    }), [e, i, o, n]),
                    s = Xa(null === r || void 0 === r ? void 0 : r.address),
                    u = hu(),
                    l = Object(a.useCallback)(Object(E.a)(I.a.mark((function t() {
                        var a, i;
                        return I.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (c === xu.NOT_APPROVED) {
                                        t.next = 3;
                                        break
                                    }
                                    return console.error("approve was called unnecessarily"), t.abrupt("return");
                                case 3:
                                    if (r) {
                                        t.next = 6;
                                        break
                                    }
                                    return console.error("no token"), t.abrupt("return");
                                case 6:
                                    if (s) {
                                        t.next = 9;
                                        break
                                    }
                                    return console.error("tokenContract is null"), t.abrupt("return");
                                case 9:
                                    if (e) {
                                        t.next = 12;
                                        break
                                    }
                                    return console.error("missing amount to approve"), t.abrupt("return");
                                case 12:
                                    if (n) {
                                        t.next = 15;
                                        break
                                    }
                                    return console.error("no spender"), t.abrupt("return");
                                case 15:
                                    return a = !1, t.next = 18, s.estimateGas.approve(n, Ws.a).catch((function() {
                                        return a = !0, s.estimateGas.approve(n, e.raw.toString())
                                    }));
                                case 18:
                                    return i = t.sent, t.abrupt("return", s.approve(n, a ? e.raw.toString() : Ws.a, {
                                        gasLimit: Xn(i)
                                    }).then((function(t) {
                                        u(t, {
                                            summary: "Approve ".concat(e.currency.symbol),
                                            approval: {
                                                tokenAddress: r.address,
                                                spender: n
                                            }
                                        })
                                    })).catch((function(e) {
                                        throw console.error("Failed to approve token", e), e
                                    })));
                                case 20:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))), [c, r, s, e, n, u]);
                return [c, l]
            }! function(e) {
                e[e.UNKNOWN = 0] = "UNKNOWN", e[e.NOT_APPROVED = 1] = "NOT_APPROVED", e[e.PENDING = 2] = "PENDING", e[e.APPROVED = 3] = "APPROVED"
            }(xu || (xu = {})),
            function(e) {
                e.CURRENCY_A = "CURRENCY_A", e.CURRENCY_B = "CURRENCY_B"
            }(gu || (gu = {}));
            var Su = Object(_e.b)("mint/typeInputMint"),
                Ru = Object(_e.b)("mint/resetMintState"),
                Uu = t(167);

            function _u(e, n) {
                var t = Object(a.useState)(e),
                    r = Object(f.a)(t, 2),
                    i = r[0],
                    o = r[1];
                return Object(a.useEffect)((function() {
                    var t = setTimeout((function() {
                        o(e)
                    }), n);
                    return function() {
                        clearTimeout(t)
                    }
                }), [e, n]), i
            }

            function Pu(e) {
                var n = Qn(e),
                    t = function(e) {
                        var n, t, r, i = _u(e, 200),
                            o = Object(a.useMemo)((function() {
                                if (!i || !Qn(i)) return [void 0];
                                try {
                                    return i ? [Object(Ci.namehash)("".concat(i.toLowerCase().substr(2), ".addr.reverse"))] : [void 0]
                                } catch (e) {
                                    return [void 0]
                                }
                            }), [i]),
                            c = da(Za(!1), "resolver", o),
                            s = null === (n = c.result) || void 0 === n ? void 0 : n[0],
                            u = da($a(s && !ki(s) ? s : void 0, !1), "name", o),
                            l = i !== e;
                        return {
                            ENSName: l ? null : null !== (t = null === (r = u.result) || void 0 === r ? void 0 : r[0]) && void 0 !== t ? t : null,
                            loading: l || c.loading || u.loading
                        }
                    }(n || void 0),
                    r = function(e) {
                        var n, t, r, i = _u(e, 200),
                            o = Object(a.useMemo)((function() {
                                if (!i) return [void 0];
                                try {
                                    return i ? [Object(Ci.namehash)(i)] : [void 0]
                                } catch (e) {
                                    return [void 0]
                                }
                            }), [i]),
                            c = da(Za(!1), "resolver", o),
                            s = null === (n = c.result) || void 0 === n ? void 0 : n[0],
                            u = da($a(s && !ki(s) ? s : void 0, !1), "addr", o),
                            l = i !== e;
                        return {
                            address: l ? null : null !== (t = null === (r = u.result) || void 0 === r ? void 0 : r[0]) && void 0 !== t ? t : null,
                            loading: l || c.loading || u.loading
                        }
                    }(e);
                return {
                    loading: t.loading || r.loading,
                    address: n || r.address,
                    name: t.ENSName ? t.ENSName : !n && r.address && e || null
                }
            }

            function Bu(e, n) {
                var t = Ue().chainId,
                    r = t ? me[t] : [],
                    i = t ? [us(e, t), us(n, t)] : [void 0, void 0],
                    o = Object(f.a)(i, 2),
                    c = o[0],
                    s = o[1],
                    u = Object(a.useMemo)((function() {
                        return ba()(r, (function(e) {
                            return r.map((function(n) {
                                return [e, n]
                            }))
                        })).filter((function(e) {
                            var n = Object(f.a)(e, 2),
                                t = n[0],
                                r = n[1];
                            return t.address !== r.address
                        }))
                    }), [r]),
                    l = Fs(Object(a.useMemo)((function() {
                        return c && s ? [
                            [c, s]
                        ].concat(Object(ce.a)(r.map((function(e) {
                            return [c, e]
                        }))), Object(ce.a)(r.map((function(e) {
                            return [s, e]
                        }))), Object(ce.a)(u)).filter((function(e) {
                            return Boolean(e[0] && e[1])
                        })).filter((function(e) {
                            var n = Object(f.a)(e, 2),
                                t = n[0],
                                r = n[1];
                            return t.address !== r.address
                        })).filter((function(e) {
                            var n = Object(f.a)(e, 2),
                                r = n[0],
                                a = n[1];
                            if (!t) return !0;
                            var i = he[t];
                            if (!i) return !0;
                            var o = i[r.address],
                                c = i[a.address];
                            return !o && !c || !(o && !o.find((function(e) {
                                return a.equals(e)
                            }))) && !(c && !c.find((function(e) {
                                return r.equals(e)
                            })))
                        })) : []
                    }), [c, s, r, u, t]));
                return Object(a.useMemo)((function() {
                    return Object.values(l.filter((function(e) {
                        return Boolean(e[0] === Ys.EXISTS && e[1])
                    })).reduce((function(e, n) {
                        var t, r = Object(f.a)(n, 2)[1];
                        return e[r.liquidityToken.address] = null !== (t = e[r.liquidityToken.address]) && void 0 !== t ? t : r, e
                    }), {}))
                }), [l])
            }

            function Mu() {
                return Object(h.d)((function(e) {
                    return e.swap
                }))
            }

            function Lu(e, n) {
                if (e && n) try {
                    var t = Object(Uu.parseUnits)(e, n.decimals).toString();
                    if ("0" !== t) return n instanceof U.l ? new U.m(n, U.f.BigInt(t)) : U.c.ether(U.f.BigInt(t))
                } catch (r) {
                    console.info('Failed to parse input amount: "'.concat(e, '"'), r)
                }
            }
            var Du = ["0xBCfCcbde45cE874adCB698cC183deBcF17952812", "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a", "0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F"];

            function zu(e, n) {
                return e.route.path.some((function(e) {
                    return e.address === n
                })) || e.route.pairs.some((function(e) {
                    return e.liquidityToken.address === n
                }))
            }

            function Yu() {
                var e, n, t, r, i, o, c, s = Ue().account,
                    u = Xs(),
                    l = Mu(),
                    d = l.independentField,
                    p = l.typedValue,
                    b = l[au.INPUT].currencyId,
                    j = l[au.OUTPUT].currencyId,
                    m = l.recipient,
                    h = ii(b),
                    v = ii(j),
                    y = Pu(null !== m && void 0 !== m ? m : void 0),
                    x = null !== (e = null === m ? s : y.address) && void 0 !== e ? e : null,
                    g = li(null !== s && void 0 !== s ? s : void 0, [null !== h && void 0 !== h ? h : void 0, null !== v && void 0 !== v ? v : void 0]),
                    w = d === au.INPUT,
                    C = Lu(p, null !== (n = w ? h : v) && void 0 !== n ? n : void 0),
                    k = function(e, n) {
                        var t = Bu(null === e || void 0 === e ? void 0 : e.currency, n);
                        return Object(a.useMemo)((function() {
                            var r;
                            return e && n && t.length > 0 && null !== (r = U.n.bestTradeExactIn(t, e, n, {
                                maxHops: 3,
                                maxNumResults: 1
                            })[0]) && void 0 !== r ? r : null
                        }), [t, e, n])
                    }(w ? C : void 0, null !== v && void 0 !== v ? v : void 0),
                    T = function(e, n) {
                        var t = Bu(e, null === n || void 0 === n ? void 0 : n.currency);
                        return Object(a.useMemo)((function() {
                            var r;
                            return e && n && t.length > 0 && null !== (r = U.n.bestTradeExactOut(t, e, n, {
                                maxHops: 3,
                                maxNumResults: 1
                            })[0]) && void 0 !== r ? r : null
                        }), [t, e, n])
                    }(null !== h && void 0 !== h ? h : void 0, w ? void 0 : C),
                    I = w ? k : T,
                    E = (t = {}, Object(O.a)(t, au.INPUT, g[0]), Object(O.a)(t, au.OUTPUT, g[1]), t),
                    A = (r = {}, Object(O.a)(r, au.INPUT, null !== h && void 0 !== h ? h : void 0), Object(O.a)(r, au.OUTPUT, null !== v && void 0 !== v ? v : void 0), r),
                    N = function(e, n, t, r) {
                        var a = eu(n),
                            i = eu(t),
                            o = n === U.d,
                            c = t === U.d,
                            s = [];
                        o && i ? s = [i] : c && a ? s = [a] : a && i && (s = [a, i]);
                        var u, l = n && s && s.length > 0 && new U.j(s, n, t);
                        try {
                            u = l && r ? new U.n(l, r, e ? U.o.EXACT_INPUT : U.o.EXACT_OUTPUT) : void 0
                        } catch (d) {
                            console.error("Failed to create V1 trade", d)
                        }
                        return u
                    }(w, A[au.INPUT], A[au.OUTPUT], C);
                (s || (i = "Connect Wallet"), C) || (i = null !== (o = i) && void 0 !== o ? o : "Enter an amount");
                A[au.INPUT] && A[au.OUTPUT] || (i = null !== (c = i) && void 0 !== c ? c : "Select a token");
                var S, R = Qn(x);
                if (x && R) {
                    if (-1 !== Du.indexOf(R) || k && zu(k, R) || T && zu(T, R)) {
                        var _;
                        i = null !== (_ = i) && void 0 !== _ ? _ : "Invalid recipient"
                    }
                } else i = null !== (S = i) && void 0 !== S ? S : "Enter a recipient";
                var P = Aa(),
                    B = Object(f.a)(P, 1)[0],
                    M = I && B && Iu(I, B),
                    L = N && B && Iu(N, B),
                    D = [E[au.INPUT], u === Qs.v1 ? L ? L[au.INPUT] : null : M ? M[au.INPUT] : null],
                    z = D[0],
                    Y = D[1];
                return z && Y && z.lessThan(Y) && (i = "Insufficient ".concat(Y.currency.symbol, " balance")), {
                    currencies: A,
                    currencyBalances: E,
                    parsedAmount: C,
                    v2Trade: null !== I && void 0 !== I ? I : void 0,
                    inputError: i,
                    v1Trade: N
                }
            }

            function qu(e) {
                if ("string" === typeof e) {
                    var n = Qn(e);
                    if (n) return n;
                    if ("ETH" === e.toUpperCase()) return "ETH";
                    if (!1 === n) return "ETH"
                }
                return null !== "ETH" ? "ETH" : ""
            }
            var Fu = /^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/,
                Vu = /^0x[a-fA-F0-9]{40}$/;

            function Wu(e) {
                var n, t = qu(e.inputCurrency),
                    r = qu(e.outputCurrency);
                t === r && ("string" === typeof e.outputCurrency ? t = "" : r = "");
                var a, i = function(e) {
                    return "string" !== typeof e ? null : Qn(e) || (Fu.test(e) || Vu.test(e) ? e : null)
                }(e.recipient);
                return n = {}, Object(O.a)(n, au.INPUT, {
                    currencyId: t
                }), Object(O.a)(n, au.OUTPUT, {
                    currencyId: r
                }), Object(O.a)(n, "typedValue", "string" !== typeof(a = e.exactAmount) || isNaN(parseFloat(a)) ? "" : a), Object(O.a)(n, "independentField", function(e) {
                    return "string" === typeof e && "output" === e.toLowerCase() ? au.OUTPUT : au.INPUT
                }(e.exactField)), Object(O.a)(n, "recipient", i), n
            }
            var Hu = U.f.BigInt(0);

            function Qu() {
                return Object(h.d)((function(e) {
                    return e.mint
                }))
            }

            function Gu(e) {
                if (e) return e.currency === U.d ? U.f.greaterThan(e.raw, Se) ? U.c.ether(U.f.subtract(e.raw, Se)) : U.c.ether(U.f.BigInt(0)) : e
            }

            function Ku() {
                var e = Object(u.a)(["\n  border: 2px solid ", ";\n  border-radius: 16px;\n  padding: 16px;\n"]);
                return Ku = function() {
                    return e
                }, e
            }
            var Ju = l.default.div(Ku(), (function(e) {
                    return e.theme.colors.borderColor
                })),
                Xu = function(e) {
                    var n = Er(),
                        t = Object(v.c)(),
                        a = t.account,
                        i = t.activate,
                        o = t.deactivate,
                        c = Object(s.z)((function(e) {
                            return i("walletconnect" === e ? oe : ae)
                        }), o, a).onPresentConnectModal;
                    return Object(r.jsx)(s.c, Object(V.a)(Object(V.a)({
                        onClick: c
                    }, e), {}, {
                        children: n(292, "Unlock Wallet")
                    }))
                };

            function Zu() {
                var e = Object(u.a)(["\n  position: relative;\n  max-width: 436px;\n  width: 100%;\n  z-index: 5;\n"]);
                return Zu = function() {
                    return e
                }, e
            }
            var $u = Object(l.default)(s.f)(Zu());

            function el(e) {
                var n = e.children;
                return Object(r.jsx)($u, {
                    children: n
                })
            }

            function nl() {
                var e = Object(u.a)(["\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n"]);
                return nl = function() {
                    return e
                }, e
            }

            function tl() {
                var e = Object(u.a)(["\n  padding: 0.5rem 1rem;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 0.5rem;\n  font-size: 1rem;\n  ", " {\n    padding: 0.25rem 0.5rem;\n  }\n  font-weight: 500;\n  cursor: pointer;\n  margin: 0.25rem;\n  overflow: hidden;\n  color: ", ";\n  :hover {\n    border: 1px solid ", ";\n  }\n  :focus {\n    border: 1px solid ", ";\n    outline: none;\n  }\n"]);
                return tl = function() {
                    return e
                }, e
            }

            function rl() {
                var e = Object(u.a)(["\n  :hover {\n    cursor: pointer;\n  }\n  color: ", ";\n"]);
                return rl = function() {
                    return e
                }, e
            }

            function al() {
                var e = Object(u.a)(["\n  position: relative;\n"]);
                return al = function() {
                    return e
                }, e
            }
            var il = l.default.div(al()),
                ol = Object(l.default)(s.v)(rl(), (function(e) {
                    return e.theme.colors.primary
                })),
                cl = (l.default.button(tl(), (function(e) {
                    return e.theme.colors.primaryDark
                }), (function(e) {
                    return e.theme.colors.primaryDark
                }), (function(e) {
                    return e.theme.mediaQueries.sm
                }), (function(e) {
                    return e.theme.colors.primary
                }), (function(e) {
                    return e.theme.colors.primary
                }), (function(e) {
                    return e.theme.colors.primary
                })), l.default.span(nl())),
                sl = Cn.body;

            function ul(e) {
                var n, t, a, i, o, c, u, l, d = e.noLiquidity,
                    p = e.price,
                    b = e.currencies,
                    f = e.parsedAmounts,
                    j = e.poolTokenPercentage,
                    m = e.onAdd;
                return Object(r.jsxs)(r.Fragment, {
                    children: [Object(r.jsxs)(Un, {
                        children: [Object(r.jsxs)(sl, {
                            children: [null === (n = b[gu.CURRENCY_A]) || void 0 === n ? void 0 : n.symbol, " Deposited"]
                        }), Object(r.jsxs)(Bn, {
                            children: [Object(r.jsx)(ro, {
                                currency: b[gu.CURRENCY_A],
                                style: {
                                    marginRight: "8px"
                                }
                            }), Object(r.jsx)(sl, {
                                children: null === (t = f[gu.CURRENCY_A]) || void 0 === t ? void 0 : t.toSignificant(6)
                            })]
                        })]
                    }), Object(r.jsxs)(Un, {
                        children: [Object(r.jsxs)(sl, {
                            children: [null === (a = b[gu.CURRENCY_B]) || void 0 === a ? void 0 : a.symbol, " Deposited"]
                        }), Object(r.jsxs)(Bn, {
                            children: [Object(r.jsx)(ro, {
                                currency: b[gu.CURRENCY_B],
                                style: {
                                    marginRight: "8px"
                                }
                            }), Object(r.jsx)(sl, {
                                children: null === (i = f[gu.CURRENCY_B]) || void 0 === i ? void 0 : i.toSignificant(6)
                            })]
                        })]
                    }), Object(r.jsxs)(Un, {
                        children: [Object(r.jsx)(sl, {
                            children: "Rates"
                        }), Object(r.jsx)(sl, {
                            children: "1 ".concat(null === (o = b[gu.CURRENCY_A]) || void 0 === o ? void 0 : o.symbol, " = ").concat(null === p || void 0 === p ? void 0 : p.toSignificant(4), " ").concat(null === (c = b[gu.CURRENCY_B]) || void 0 === c ? void 0 : c.symbol)
                        })]
                    }), Object(r.jsx)(Un, {
                        style: {
                            justifyContent: "flex-end"
                        },
                        children: Object(r.jsx)(sl, {
                            children: "1 ".concat(null === (u = b[gu.CURRENCY_B]) || void 0 === u ? void 0 : u.symbol, " = ").concat(null === p || void 0 === p ? void 0 : p.invert().toSignificant(4), " ").concat(null === (l = b[gu.CURRENCY_A]) || void 0 === l ? void 0 : l.symbol)
                        })
                    }), Object(r.jsxs)(Un, {
                        children: [Object(r.jsx)(sl, {
                            children: "Share of Pool:"
                        }), Object(r.jsxs)(sl, {
                            children: [d ? "100" : null === j || void 0 === j ? void 0 : j.toSignificant(4), "%"]
                        })]
                    }), Object(r.jsx)(s.c, {
                        mt: "20px",
                        onClick: m,
                        children: d ? "Create Pool & Supply" : "Confirm Supply"
                    })]
                })
            }
            var ll = Cn.black;

            function dl(e) {
                var n, t, a, i, o, c, u, l, d = e.currencies,
                    p = e.noLiquidity,
                    b = e.poolTokenPercentage,
                    f = e.price;
                return Object(r.jsx)(Qe, {
                    gap: "md",
                    children: Object(r.jsxs)(Pn, {
                        justify: "space-around",
                        gap: "4px",
                        children: [Object(r.jsxs)(Qe, {
                            justify: "center",
                            children: [Object(r.jsx)(ll, {
                                children: null !== (n = null === f || void 0 === f ? void 0 : f.toSignificant(6)) && void 0 !== n ? n : "-"
                            }), Object(r.jsxs)(s.v, {
                                fontSize: "14px",
                                color: "textSubtle",
                                pt: 1,
                                children: [null === (t = d[gu.CURRENCY_B]) || void 0 === t ? void 0 : t.symbol, " per ", null === (a = d[gu.CURRENCY_A]) || void 0 === a ? void 0 : a.symbol]
                            })]
                        }), Object(r.jsxs)(Qe, {
                            justify: "center",
                            children: [Object(r.jsx)(ll, {
                                children: null !== (i = null === f || void 0 === f || null === (o = f.invert()) || void 0 === o ? void 0 : o.toSignificant(6)) && void 0 !== i ? i : "-"
                            }), Object(r.jsxs)(s.v, {
                                fontSize: "14px",
                                color: "textSubtle",
                                pt: 1,
                                children: [null === (c = d[gu.CURRENCY_A]) || void 0 === c ? void 0 : c.symbol, " per ", null === (u = d[gu.CURRENCY_B]) || void 0 === u ? void 0 : u.symbol]
                            })]
                        }), Object(r.jsxs)(Qe, {
                            justify: "center",
                            children: [Object(r.jsxs)(ll, {
                                children: [p && f ? "100" : null !== (l = (null === b || void 0 === b ? void 0 : b.lessThan(Ce)) ? "<0.01" : null === b || void 0 === b ? void 0 : b.toFixed(2)) && void 0 !== l ? l : "0", "%"]
                            }), Object(r.jsx)(s.v, {
                                fontSize: "14px",
                                color: "textSubtle",
                                pt: 1,
                                children: "Share of Pool"
                            })]
                        })]
                    })
                })
            }
            var pl = Cn.italic;

            function bl(e) {
                var n, t, i, o, c, u, l, d, p, b, j, m = e.match.params,
                    v = m.currencyIdA,
                    y = m.currencyIdB,
                    x = e.history,
                    g = Ue(),
                    w = g.account,
                    C = g.chainId,
                    k = g.library,
                    T = ii(v),
                    A = ii(y),
                    N = Boolean(C && (T && Object(U.q)(T, U.p[C]) || A && Object(U.q)(A, U.p[C]))),
                    S = Ea(),
                    R = Qu(),
                    _ = R.independentField,
                    P = R.typedValue,
                    B = R.otherTypedValue,
                    M = function(e, n) {
                        var t, r, i, o, c, s, u, l = Ue(),
                            d = l.account,
                            p = l.chainId,
                            b = Qu(),
                            j = b.independentField,
                            m = b.typedValue,
                            h = b.otherTypedValue,
                            v = j === gu.CURRENCY_A ? gu.CURRENCY_B : gu.CURRENCY_A,
                            y = Object(a.useMemo)((function() {
                                var t;
                                return t = {}, Object(O.a)(t, gu.CURRENCY_A, null !== e && void 0 !== e ? e : void 0), Object(O.a)(t, gu.CURRENCY_B, null !== n && void 0 !== n ? n : void 0), t
                            }), [e, n]),
                            x = Vs(y[gu.CURRENCY_A], y[gu.CURRENCY_B]),
                            g = Object(f.a)(x, 2),
                            w = g[0],
                            C = g[1],
                            k = cs(null === C || void 0 === C ? void 0 : C.liquidityToken),
                            T = w === Ys.NOT_EXISTS || Boolean(k && U.f.equal(k.raw, Hu)),
                            I = li(null !== d && void 0 !== d ? d : void 0, [y[gu.CURRENCY_A], y[gu.CURRENCY_B]]),
                            E = (t = {}, Object(O.a)(t, gu.CURRENCY_A, I[0]), Object(O.a)(t, gu.CURRENCY_B, I[1]), t),
                            A = Lu(m, y[j]),
                            N = Object(a.useMemo)((function() {
                                if (T) return h && y[v] ? Lu(h, y[v]) : void 0;
                                if (A) {
                                    var t = ls(A, p),
                                        r = [us(e, p), us(n, p)],
                                        a = r[0],
                                        i = r[1];
                                    if (a && i && t && C) {
                                        var o = v === gu.CURRENCY_B ? n : e,
                                            c = v === gu.CURRENCY_B ? C.priceOf(a).quote(t) : C.priceOf(i).quote(t);
                                        return o === U.d ? U.c.ether(c.raw) : c
                                    }
                                }
                            }), [T, h, y, v, A, e, p, n, C]),
                            S = (r = {}, Object(O.a)(r, gu.CURRENCY_A, j === gu.CURRENCY_A ? A : N), Object(O.a)(r, gu.CURRENCY_B, j === gu.CURRENCY_A ? N : A), r),
                            R = Object(a.useMemo)((function() {
                                if (T) {
                                    var n = S[gu.CURRENCY_A],
                                        t = S[gu.CURRENCY_B];
                                    return n && t ? new U.i(n.currency, t.currency, n.raw, t.raw) : void 0
                                }
                                var r = us(e, p);
                                return C && r ? C.priceOf(r) : void 0
                            }), [p, e, T, C, S]),
                            _ = Object(a.useMemo)((function() {
                                var e = S[gu.CURRENCY_A],
                                    n = S[gu.CURRENCY_B],
                                    t = [ls(e, p), ls(n, p)],
                                    r = t[0],
                                    a = t[1];
                                if (C && k && r && a) return C.getLiquidityMinted(k, r, a)
                            }), [S, p, C, k]),
                            P = Object(a.useMemo)((function() {
                                if (_ && k) return new U.h(_.raw, k.add(_).raw)
                            }), [_, k]);
                        d || (c = "Connect Wallet"), w === Ys.INVALID && (c = null !== (s = c) && void 0 !== s ? s : Ir(136, "Invalid pair")), S[gu.CURRENCY_A] && S[gu.CURRENCY_B] || (c = null !== (u = c) && void 0 !== u ? u : Ir(84, "Enter an amount"));
                        var B, M, L = S[gu.CURRENCY_A],
                            D = S[gu.CURRENCY_B];
                        return L && (null === E || void 0 === E || null === (i = E[gu.CURRENCY_A]) || void 0 === i ? void 0 : i.lessThan(L)) && (c = "Insufficient ".concat(null === (B = y[gu.CURRENCY_A]) || void 0 === B ? void 0 : B.symbol, " balance")), D && (null === E || void 0 === E || null === (o = E[gu.CURRENCY_B]) || void 0 === o ? void 0 : o.lessThan(D)) && (c = "Insufficient ".concat(null === (M = y[gu.CURRENCY_B]) || void 0 === M ? void 0 : M.symbol, " balance")), {
                            dependentField: v,
                            currencies: y,
                            pair: C,
                            pairState: w,
                            currencyBalances: E,
                            parsedAmounts: S,
                            price: R,
                            noLiquidity: T,
                            liquidityMinted: _,
                            poolTokenPercentage: P,
                            error: c
                        }
                    }(null !== T && void 0 !== T ? T : void 0, null !== A && void 0 !== A ? A : void 0),
                    L = M.dependentField,
                    D = M.currencies,
                    z = M.pair,
                    Y = M.pairState,
                    q = M.currencyBalances,
                    F = M.parsedAmounts,
                    W = M.price,
                    H = M.noLiquidity,
                    Q = M.liquidityMinted,
                    G = M.poolTokenPercentage,
                    K = M.error,
                    J = function(e) {
                        var n = Object(h.c)();
                        return {
                            onFieldAInput: Object(a.useCallback)((function(t) {
                                n(Su({
                                    field: gu.CURRENCY_A,
                                    typedValue: t,
                                    noLiquidity: !0 === e
                                }))
                            }), [n, e]),
                            onFieldBInput: Object(a.useCallback)((function(t) {
                                n(Su({
                                    field: gu.CURRENCY_B,
                                    typedValue: t,
                                    noLiquidity: !0 === e
                                }))
                            }), [n, e])
                        }
                    }(H),
                    X = J.onFieldAInput,
                    Z = J.onFieldBInput,
                    $ = !K,
                    ee = Object(a.useState)(!1),
                    ne = Object(f.a)(ee, 2),
                    te = ne[0],
                    re = ne[1],
                    ae = Object(a.useState)(!1),
                    ie = Object(f.a)(ae, 2),
                    oe = ie[0],
                    ue = ie[1],
                    le = Na(),
                    de = Object(f.a)(le, 1)[0],
                    pe = Aa(),
                    be = Object(f.a)(pe, 1)[0],
                    fe = Object(a.useState)(""),
                    je = Object(f.a)(fe, 2),
                    me = je[0],
                    he = je[1],
                    ve = (i = {}, Object(O.a)(i, _, P), Object(O.a)(i, L, H ? B : null !== (n = null === (t = F[L]) || void 0 === t ? void 0 : t.toSignificant(6)) && void 0 !== n ? n : ""), i),
                    ye = [gu.CURRENCY_A, gu.CURRENCY_B].reduce((function(e, n) {
                        return Object(V.a)(Object(V.a)({}, e), {}, Object(O.a)({}, n, Gu(q[n])))
                    }), {}),
                    Oe = [gu.CURRENCY_A, gu.CURRENCY_B].reduce((function(e, n) {
                        var t, r;
                        return Object(V.a)(Object(V.a)({}, e), {}, Object(O.a)({}, n, null === (t = ye[n]) || void 0 === t ? void 0 : t.equalTo(null !== (r = F[n]) && void 0 !== r ? r : "0")))
                    }), {}),
                    xe = Nu(F[gu.CURRENCY_A], se),
                    ge = Object(f.a)(xe, 2),
                    we = ge[0],
                    Ce = ge[1],
                    ke = Nu(F[gu.CURRENCY_B], se),
                    Te = Object(f.a)(ke, 2),
                    Ie = Te[0],
                    Ee = Te[1],
                    Ae = hu();

                function Ne() {
                    return Se.apply(this, arguments)
                }

                function Se() {
                    return (Se = Object(E.a)(I.a.mark((function e() {
                        var n, t, r, a, i, o, c, s, u, l, d, p, b, f, j, m, h;
                        return I.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (C && k && w) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (t = et(0, k, w), r = F[gu.CURRENCY_A], a = F[gu.CURRENCY_B], r && a && T && A) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 6:
                                    return n = {}, Object(O.a)(n, gu.CURRENCY_A, Zn(r, H ? 0 : be)[0]), Object(O.a)(n, gu.CURRENCY_B, Zn(a, H ? 0 : be)[0]), i = n, o = Math.ceil(Date.now() / 1e3) + de, T === U.d || A === U.d ? (b = A === U.d, c = t.estimateGas.addLiquidityETH, s = t.addLiquidityETH, u = [null !== (d = null === (p = us(b ? T : A, C)) || void 0 === p ? void 0 : p.address) && void 0 !== d ? d : "", (b ? r : a).raw.toString(), i[b ? gu.CURRENCY_A : gu.CURRENCY_B].toString(), i[b ? gu.CURRENCY_B : gu.CURRENCY_A].toString(), w, o], l = Wn.a.from((b ? a : r).raw.toString())) : (c = t.estimateGas.addLiquidity, s = t.addLiquidity, u = [null !== (f = null === (j = us(T, C)) || void 0 === j ? void 0 : j.address) && void 0 !== f ? f : "", null !== (m = null === (h = us(A, C)) || void 0 === h ? void 0 : h.address) && void 0 !== m ? m : "", r.raw.toString(), a.raw.toString(), i[gu.CURRENCY_A].toString(), i[gu.CURRENCY_B].toString(), w, o], l = null), ue(!0), e.next = 12, c.apply(void 0, Object(ce.a)(u).concat([l ? {
                                        value: l
                                    } : {}])).then((function(e) {
                                        return s.apply(void 0, Object(ce.a)(u).concat([Object(V.a)(Object(V.a)({}, l ? {
                                            value: l
                                        } : {}), {}, {
                                            gasLimit: Xn(e)
                                        })])).then((function(e) {
                                            var n, t, r, a;
                                            ue(!1), Ae(e, {
                                                summary: "Add ".concat(null === (n = F[gu.CURRENCY_A]) || void 0 === n ? void 0 : n.toSignificant(3), " ").concat(null === (t = D[gu.CURRENCY_A]) || void 0 === t ? void 0 : t.symbol, " and ").concat(null === (r = F[gu.CURRENCY_B]) || void 0 === r ? void 0 : r.toSignificant(3), " ").concat(null === (a = D[gu.CURRENCY_B]) || void 0 === a ? void 0 : a.symbol)
                                            }), he(e.hash)
                                        }))
                                    })).catch((function(e) {
                                        ue(!1), 4001 !== (null === e || void 0 === e ? void 0 : e.code) && console.error(e)
                                    }));
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                var Re = function() {
                        var e, n, t, a;
                        return H ? Object(r.jsx)(Qe, {
                            gap: "20px",
                            children: Object(r.jsx)(Yt, {
                                mt: "20px",
                                borderRadius: "20px",
                                children: Object(r.jsxs)(_n, {
                                    children: [Object(r.jsx)(s.v, {
                                        fontSize: "48px",
                                        mr: "8px",
                                        children: "".concat(null === (e = D[gu.CURRENCY_A]) || void 0 === e ? void 0 : e.symbol, "/").concat(null === (n = D[gu.CURRENCY_B]) || void 0 === n ? void 0 : n.symbol)
                                    }), Object(r.jsx)(Nc, {
                                        currency0: D[gu.CURRENCY_A],
                                        currency1: D[gu.CURRENCY_B],
                                        size: 30
                                    })]
                                })
                            })
                        }) : Object(r.jsxs)(Qe, {
                            gap: "20px",
                            children: [Object(r.jsxs)(_n, {
                                style: {
                                    marginTop: "20px"
                                },
                                children: [Object(r.jsx)(s.v, {
                                    fontSize: "48px",
                                    mr: "8px",
                                    children: null === Q || void 0 === Q ? void 0 : Q.toSignificant(6)
                                }), Object(r.jsx)(Nc, {
                                    currency0: D[gu.CURRENCY_A],
                                    currency1: D[gu.CURRENCY_B],
                                    size: 30
                                })]
                            }), Object(r.jsx)(Mn, {
                                children: Object(r.jsx)(s.v, {
                                    fontSize: "24px",
                                    children: "".concat(null === (t = D[gu.CURRENCY_A]) || void 0 === t ? void 0 : t.symbol, "/").concat(null === (a = D[gu.CURRENCY_B]) || void 0 === a ? void 0 : a.symbol, " Pool Tokens")
                                })
                            }), Object(r.jsx)(pl, {
                                fontSize: 12,
                                textAlign: "left",
                                padding: "8px 0 0 0 ",
                                children: "Output is estimated. If the price changes by more than ".concat(be / 100, "% your transaction will revert.")
                            })]
                        })
                    },
                    _e = function() {
                        return Object(r.jsx)(ul, {
                            price: W,
                            currencies: D,
                            parsedAmounts: F,
                            noLiquidity: H,
                            onAdd: Ne,
                            poolTokenPercentage: G
                        })
                    },
                    Pe = "Supplying ".concat(null === (o = F[gu.CURRENCY_A]) || void 0 === o ? void 0 : o.toSignificant(6), " ").concat(null === (c = D[gu.CURRENCY_A]) || void 0 === c ? void 0 : c.symbol, " and ").concat(null === (u = F[gu.CURRENCY_B]) || void 0 === u ? void 0 : u.toSignificant(6), " ").concat(null === (l = D[gu.CURRENCY_B]) || void 0 === l ? void 0 : l.symbol),
                    Be = Object(a.useCallback)((function(e) {
                        var n = ss(e);
                        n === y ? x.push("/add/".concat(y, "/").concat(v)) : x.push("/add/".concat(n, "/").concat(y))
                    }), [y, x, v]),
                    Me = Object(a.useCallback)((function(e) {
                        var n = ss(e);
                        v === n ? y ? x.push("/add/".concat(y, "/").concat(n)) : x.push("/add/".concat(n)) : x.push("/add/".concat(v || "ETH", "/").concat(n))
                    }), [v, x, y]),
                    Le = Object(a.useCallback)((function() {
                        re(!1), me && X(""), he("")
                    }), [X, me]);
                return Object(r.jsxs)(r.Fragment, {
                    children: [Object(r.jsx)(Ur, {
                        activeIndex: 1
                    }), Object(r.jsxs)(el, {
                        children: [Object(r.jsx)(as, {
                            adding: !0
                        }), Object(r.jsxs)(il, {
                            children: [Object(r.jsx)(gr, {
                                isOpen: te,
                                onDismiss: Le,
                                attemptingTxn: oe,
                                hash: me,
                                content: function() {
                                    return Object(r.jsx)(yr, {
                                        title: H ? "You are creating a pool" : "You will receive",
                                        onDismiss: Le,
                                        topContent: Re,
                                        bottomContent: _e
                                    })
                                },
                                pendingText: Pe
                            }), Object(r.jsx)(s.g, {
                                children: Object(r.jsxs)(Qe, {
                                    gap: "20px",
                                    children: [H && Object(r.jsx)(He, {
                                        children: Object(r.jsx)(Ju, {
                                            children: Object(r.jsxs)(Qe, {
                                                gap: "12px",
                                                children: [Object(r.jsx)(s.v, {
                                                    children: "You are the first liquidity provider."
                                                }), Object(r.jsx)(s.v, {
                                                    children: "The ratio of tokens you add will set the price of this pool."
                                                }), Object(r.jsx)(s.v, {
                                                    children: "Once you are happy with the rate click supply to review."
                                                })]
                                            })
                                        })
                                    }), Object(r.jsx)(Qc, {
                                        value: ve[gu.CURRENCY_A],
                                        onUserInput: X,
                                        onMax: function() {
                                            var e, n;
                                            X(null !== (e = null === (n = ye[gu.CURRENCY_A]) || void 0 === n ? void 0 : n.toExact()) && void 0 !== e ? e : "")
                                        },
                                        onCurrencySelect: Be,
                                        showMaxButton: !Oe[gu.CURRENCY_A],
                                        currency: D[gu.CURRENCY_A],
                                        id: "add-liquidity-input-tokena",
                                        showCommonBases: !1
                                    }), Object(r.jsx)(He, {
                                        children: Object(r.jsx)(s.a, {
                                            color: "textSubtle"
                                        })
                                    }), Object(r.jsx)(Qc, {
                                        value: ve[gu.CURRENCY_B],
                                        onUserInput: Z,
                                        onCurrencySelect: Me,
                                        onMax: function() {
                                            var e, n;
                                            Z(null !== (e = null === (n = ye[gu.CURRENCY_B]) || void 0 === n ? void 0 : n.toExact()) && void 0 !== e ? e : "")
                                        },
                                        showMaxButton: !Oe[gu.CURRENCY_B],
                                        currency: D[gu.CURRENCY_B],
                                        id: "add-liquidity-input-tokenb",
                                        showCommonBases: !1
                                    }), D[gu.CURRENCY_A] && D[gu.CURRENCY_B] && Y !== Ys.INVALID && Object(r.jsxs)("div", {
                                        children: [Object(r.jsx)(s.v, {
                                            style: {
                                                textTransform: "uppercase",
                                                fontWeight: 600
                                            },
                                            color: "textSubtle",
                                            fontSize: "12px",
                                            mb: "2px",
                                            children: H ? "Initial prices and pool share" : "Prices and pool share"
                                        }), Object(r.jsx)(Ju, {
                                            children: Object(r.jsx)(dl, {
                                                currencies: D,
                                                poolTokenPercentage: G,
                                                noLiquidity: H,
                                                price: W
                                            })
                                        })]
                                    }), w ? Object(r.jsxs)(Qe, {
                                        gap: "md",
                                        children: [(we === xu.NOT_APPROVED || we === xu.PENDING || Ie === xu.NOT_APPROVED || Ie === xu.PENDING) && $ && Object(r.jsxs)(Un, {
                                            children: [we !== xu.APPROVED && Object(r.jsx)(s.c, {
                                                onClick: Ce,
                                                disabled: we === xu.PENDING,
                                                style: {
                                                    width: Ie !== xu.APPROVED ? "48%" : "100%"
                                                },
                                                children: we === xu.PENDING ? Object(r.jsxs)(cl, {
                                                    children: ["Approving ", null === (d = D[gu.CURRENCY_A]) || void 0 === d ? void 0 : d.symbol]
                                                }) : "Approve ".concat(null === (p = D[gu.CURRENCY_A]) || void 0 === p ? void 0 : p.symbol)
                                            }), Ie !== xu.APPROVED && Object(r.jsx)(s.c, {
                                                onClick: Ee,
                                                disabled: Ie === xu.PENDING,
                                                style: {
                                                    width: we !== xu.APPROVED ? "48%" : "100%"
                                                },
                                                children: Ie === xu.PENDING ? Object(r.jsxs)(cl, {
                                                    children: ["Approving ", null === (b = D[gu.CURRENCY_B]) || void 0 === b ? void 0 : b.symbol]
                                                }) : "Approve ".concat(null === (j = D[gu.CURRENCY_B]) || void 0 === j ? void 0 : j.symbol)
                                            })]
                                        }), Object(r.jsx)(s.c, {
                                            onClick: function() {
                                                S ? Ne() : re(!0)
                                            },
                                            disabled: !$ || we !== xu.APPROVED || Ie !== xu.APPROVED,
                                            variant: !$ && F[gu.CURRENCY_A] && F[gu.CURRENCY_B] ? "danger" : "primary",
                                            fullWidth: !0,
                                            children: null !== K && void 0 !== K ? K : "Supply"
                                        })]
                                    }) : Object(r.jsx)(Xu, {
                                        fullWidth: !0
                                    })]
                                })
                            })]
                        })]
                    }), z && !H && Y !== Ys.INVALID ? Object(r.jsx)(Qe, {
                        style: {
                            minWidth: "20rem",
                            marginTop: "1rem"
                        },
                        children: Object(r.jsx)(Ds, {
                            showUnwrapped: N,
                            pair: z
                        })
                    }) : null]
                })
            }

            function fl() {
                return Object(r.jsx)(m.a, {
                    to: "/add/"
                })
            }
            var jl = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;

            function ml(e) {
                var n = e.match.params.currencyIdA.match(jl);
                return (null === n || void 0 === n ? void 0 : n.length) ? Object(r.jsx)(m.a, {
                    to: "/add/".concat(n[1], "/").concat(n[2])
                }) : Object(r.jsx)(bl, Object(V.a)({}, e))
            }

            function hl(e) {
                var n = e.match.params,
                    t = n.currencyIdA,
                    a = n.currencyIdB;
                return t.toLowerCase() === a.toLowerCase() ? Object(r.jsx)(m.a, {
                    to: "/add/".concat(t)
                }) : Object(r.jsx)(bl, Object(V.a)({}, e))
            }
            var vl = Cn.body;

            function yl(e) {
                var n = e.message;
                return Object(r.jsx)(Qe, {
                    style: {
                        minHeight: 200,
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    children: Object(r.jsx)(vl, {
                        children: n
                    })
                })
            }
            var Ol = Object(m.h)((function(e) {
                    var n = e.token,
                        t = e.V1LiquidityBalance,
                        a = Ue().chainId;
                    return Object(r.jsx)(Ls, {
                        children: Object(r.jsxs)(Qe, {
                            gap: "12px",
                            children: [Object(r.jsx)(Ms, {
                                children: Object(r.jsxs)(Bn, {
                                    children: [Object(r.jsx)(Nc, {
                                        currency0: n,
                                        margin: !0,
                                        size: 20
                                    }), Object(r.jsx)(s.v, {
                                        fontSize: "20px",
                                        style: {
                                            marginLeft: ""
                                        },
                                        children: "".concat(a && n.equals(U.p[a]) ? "WETH" : n.symbol, "/ETH")
                                    }), Object(r.jsx)(s.v, {
                                        fontSize: "12px",
                                        ml: "0.5rem",
                                        px: "0.75rem",
                                        py: "0.25rem",
                                        style: {
                                            borderRadius: "1rem"
                                        },
                                        color: "black",
                                        children: "V1"
                                    })]
                                })
                            }), Object(r.jsx)(Qe, {
                                gap: "8px",
                                children: Object(r.jsxs)(Un, {
                                    marginTop: "10px",
                                    children: [Object(r.jsx)(s.c, {
                                        style: {
                                            width: "68%"
                                        },
                                        as: j.b,
                                        to: "/migrate/v1/".concat(t.token.address),
                                        children: "Migrate"
                                    }), Object(r.jsx)(s.c, {
                                        variant: "secondary",
                                        style: {
                                            width: "28%"
                                        },
                                        as: j.b,
                                        to: "/remove/v1/".concat(t.token.address),
                                        children: "Remove"
                                    })]
                                })
                            })]
                        })
                    })
                })),
                xl = Cn.mediumHeader,
                gl = Cn.body;

            function wl() {
                var e, n = Object(a.useContext)(l.ThemeContext),
                    t = Ue(),
                    i = t.account,
                    o = t.chainId,
                    c = Object(a.useState)(""),
                    s = Object(f.a)(c, 2),
                    u = s[0],
                    d = s[1],
                    p = Object(a.useCallback)((function(e) {
                        return d(e.target.value)
                    }), [d]),
                    b = ai(u),
                    j = nt(Wr(), null !== b && void 0 !== b ? b : void 0),
                    m = ni(),
                    h = Sa();
                Object(a.useEffect)((function() {
                    !b || j || m[b.address] || h(b)
                }), [b, j, h, m]);
                var v = nu(),
                    y = Object(a.useMemo)((function() {
                        return o ? Object.keys(v).map((function(e) {
                            return new U.l(o, e, 18, "UNI-V1", "Uniswap V1")
                        })) : []
                    }), [o, v]),
                    O = ci(null !== i && void 0 !== i ? i : void 0, y),
                    x = Object(f.a)(O, 2),
                    g = x[0],
                    w = x[1],
                    C = y.filter((function(e) {
                        var n = null === g || void 0 === g ? void 0 : g[e.address];
                        return n && U.f.greaterThan(n.raw, U.f.BigInt(0))
                    })).map((function(e) {
                        var n = g[e.address];
                        return n ? Object(r.jsx)(Ol, {
                            token: v[e.address],
                            V1LiquidityBalance: n
                        }, e.address) : null
                    })),
                    k = 0 === (null === (e = Object.keys(v)) || void 0 === e ? void 0 : e.length) || w;
                return Object(r.jsx)($u, {
                    children: Object(r.jsxs)(Qe, {
                        gap: "16px",
                        children: [Object(r.jsxs)(Pn, {
                            style: {
                                alignItems: "center",
                                justifyContent: "space-between"
                            },
                            gap: "8px",
                            children: [Object(r.jsx)(wn, {
                                to: "/pool"
                            }), Object(r.jsx)(xl, {
                                children: "Migrate V1 Liquidity"
                            }), Object(r.jsx)("div", {
                                children: Object(r.jsx)(Ki, {
                                    text: "Migrate your liquidity tokens from Uniswap V1 to Uniswap V2."
                                })
                            })]
                        }), Object(r.jsx)(gl, {
                            style: {
                                marginBottom: 8,
                                fontWeight: 400
                            },
                            children: "For each pool shown below, click migrate to remove your liquidity from Uniswap V1 and deposit it into Uniswap V2."
                        }), i ? k ? Object(r.jsx)(Yt, {
                            padding: "40px",
                            children: Object(r.jsx)(gl, {
                                color: n.colors.textDisabled,
                                textAlign: "center",
                                children: Object(r.jsx)(Ns, {
                                    children: "Loading"
                                })
                            })
                        }) : Object(r.jsxs)(r.Fragment, {
                            children: [Object(r.jsx)(Pn, {
                                children: Object(r.jsx)(yo, {
                                    value: u,
                                    onChange: p,
                                    placeholder: "Enter a token address to find liquidity"
                                })
                            }), (null === C || void 0 === C ? void 0 : C.length) > 0 ? Object(r.jsx)(r.Fragment, {
                                children: C
                            }) : Object(r.jsx)(yl, {
                                message: "No V1 Liquidity found."
                            })]
                        }) : Object(r.jsx)(Yt, {
                            padding: "40px",
                            children: Object(r.jsx)(gl, {
                                color: n.colors.textDisabled,
                                textAlign: "center",
                                children: "Connect to a wallet to view your V1 liquidity."
                            })
                        })]
                    })
                })
            }
            var Cl = Cn.mediumHeader,
                kl = Cn.largeHeader,
                Tl = Cn.body,
                Il = Cn.blue,
                El = Cn.black,
                Al = Cn.darkGray,
                Nl = new U.e(U.f.BigInt(1), U.f.BigInt(1e6)),
                Sl = U.f.exponentiate(U.f.BigInt(10), U.f.BigInt(18)),
                Rl = U.f.BigInt(0),
                Ul = U.f.BigInt(1),
                _l = new U.e(Rl, Ul),
                Pl = new U.h(U.f.BigInt(9920), U.f.BigInt(1e4));

            function Bl(e) {
                var n = e.currencyAmount;
                return Object(r.jsx)(r.Fragment, {
                    children: n.equalTo(U.f.BigInt(0)) ? "0" : n.greaterThan(Nl) ? n.toSignificant(4) : "<".concat(Nl.toSignificant(1))
                })
            }

            function Ml(e) {
                var n = e.token,
                    t = e.liquidityTokenAmount,
                    a = e.tokenWorth,
                    i = e.ethWorth,
                    o = Ue().chainId;
                return Object(r.jsxs)(r.Fragment, {
                    children: [Object(r.jsxs)(Pn, {
                        style: {
                            justifyContent: "flex-start",
                            width: "fit-content"
                        },
                        children: [Object(r.jsx)(ro, {
                            size: "24px",
                            currency: n
                        }), Object(r.jsx)("div", {
                            style: {
                                marginLeft: ".75rem"
                            },
                            children: Object(r.jsxs)(Cl, {
                                children: [Object(r.jsx)(Bl, {
                                    currencyAmount: t
                                }), " ", o && n.equals(U.p[o]) ? "WETH" : n.symbol, "/ETH"]
                            })
                        })]
                    }), Object(r.jsxs)(Un, {
                        my: "1rem",
                        children: [Object(r.jsxs)(s.v, {
                            fontSize: "16px",
                            children: ["Pooled ", o && n.equals(U.p[o]) ? "WETH" : n.symbol, ":"]
                        }), Object(r.jsxs)(Bn, {
                            children: [Object(r.jsx)(s.v, {
                                fontSize: "16px",
                                ml: "6px",
                                children: a.toSignificant(4)
                            }), Object(r.jsx)(ro, {
                                size: "20px",
                                style: {
                                    marginLeft: "8px"
                                },
                                currency: n
                            })]
                        })]
                    }), Object(r.jsxs)(Un, {
                        mb: "1rem",
                        children: [Object(r.jsx)(s.v, {
                            fontSize: "16px",
                            children: "Pooled ETH:"
                        }), Object(r.jsxs)(Bn, {
                            children: [Object(r.jsx)(s.v, {
                                fontSize: "16px",
                                ml: "6px",
                                children: Object(r.jsx)(Bl, {
                                    currencyAmount: i
                                })
                            }), Object(r.jsx)(ro, {
                                size: "20px",
                                style: {
                                    marginLeft: "8px"
                                },
                                currency: U.b.ETHER
                            })]
                        })]
                    })]
                })
            }

            function Ll(e) {
                var n, t, i, o, c = e.liquidityTokenAmount,
                    u = e.token,
                    l = Ue(),
                    d = l.account,
                    p = l.chainId,
                    b = cs(c.token),
                    j = null === (n = oi([c.token.address])) || void 0 === n ? void 0 : n[c.token.address],
                    m = ui(c.token.address, u),
                    h = Vs(p ? U.p[p] : void 0, u),
                    v = Object(f.a)(h, 2),
                    y = v[0],
                    O = v[1],
                    x = y === Ys.NOT_EXISTS,
                    g = p && O ? O.reserveOf(u).divide(O.reserveOf(U.p[p])) : void 0,
                    w = Object(a.useState)(!1),
                    C = Object(f.a)(w, 2),
                    k = C[0],
                    T = C[1],
                    I = Object(a.useState)(null),
                    E = Object(f.a)(I, 2),
                    A = E[0],
                    N = E[1],
                    S = b ? new U.h(c.raw, b.raw) : _l,
                    R = j ? U.c.ether(j.multiply(S).multiply(Sl).quotient) : U.c.ether(Rl),
                    _ = m ? new U.m(u, S.multiply(m.raw).quotient) : new U.m(u, Rl),
                    P = Nu(c, Ya),
                    B = Object(f.a)(P, 2),
                    M = B[0],
                    L = B[1],
                    D = m && j ? m.divide(new U.e(j.raw, Sl)) : null,
                    z = D && g ? D.divide(g).multiply("100").subtract("100") : void 0,
                    Y = (null === z || void 0 === z ? void 0 : z.lessThan(Rl)) ? null === z || void 0 === z ? void 0 : z.multiply("-1") : z,
                    q = g && _ ? _.divide(g).multiply(Sl).multiply(Pl).quotient : null === R || void 0 === R ? void 0 : R.numerator,
                    F = g && R ? R.multiply(g).multiply(U.f.exponentiate(U.f.BigInt(10), U.f.BigInt(u.decimals))).multiply(Pl).quotient : null === _ || void 0 === _ ? void 0 : _.numerator,
                    V = hu(),
                    W = yu(null !== A && void 0 !== A ? A : void 0),
                    H = Ga(Ya, za, !0),
                    Q = Object(a.useCallback)((function() {
                        F && q && H && (T(!0), H.migrate(u.address, F.toString(), q.toString(), d, Math.floor((new Date).getTime() / 1e3) + we).then((function(e) {
                            V(e, {
                                summary: "Migrate ".concat(u.symbol, " liquidity to V2")
                            }), N(e.hash)
                        })).catch((function() {
                            T(!1)
                        })))
                    }), [F, q, H, u, d, V]),
                    G = !!c && c.equalTo(Rl),
                    K = !!Y && !Y.lessThan(U.f.BigInt(5)),
                    J = !!A && G;
                return Object(r.jsxs)(Qe, {
                    gap: "20px",
                    children: [Object(r.jsxs)(Tl, {
                        my: 9,
                        style: {
                            fontWeight: 400
                        },
                        children: ["This tool will safely migrate your V1 liquidity to V2 with minimal price risk. The process is completely trustless thanks to the", " ", p && Object(r.jsx)(yn, {
                            href: Kn(p, Ya, "address"),
                            children: Object(r.jsx)(Il, {
                                display: "inline",
                                children: "Uniswap migration contract\u2197"
                            })
                        }), "."]
                    }), !x && K ? Object(r.jsxs)(Ft, {
                        children: [Object(r.jsx)(Tl, {
                            style: {
                                marginBottom: 8,
                                fontWeight: 400
                            },
                            children: "It's best to deposit liquidity into Uniswap V2 at a price you believe is correct. If the V2 price seems incorrect, you can either make a swap to move the price or wait for someone else to do so."
                        }), Object(r.jsxs)(Qe, {
                            gap: "8px",
                            children: [Object(r.jsxs)(Un, {
                                children: [Object(r.jsx)(Tl, {
                                    children: "V1 Price:"
                                }), Object(r.jsxs)(El, {
                                    children: [null === D || void 0 === D ? void 0 : D.toSignificant(6), " ", u.symbol, "/ETH"]
                                })]
                            }), Object(r.jsxs)(Un, {
                                children: [Object(r.jsx)("div", {}), Object(r.jsxs)(El, {
                                    children: [null === D || void 0 === D || null === (t = D.invert()) || void 0 === t ? void 0 : t.toSignificant(6), " ETH/", u.symbol]
                                })]
                            }), Object(r.jsxs)(Un, {
                                children: [Object(r.jsx)(Tl, {
                                    children: "V2 Price:"
                                }), Object(r.jsxs)(El, {
                                    children: [null === g || void 0 === g ? void 0 : g.toSignificant(6), " ", u.symbol, "/ETH"]
                                })]
                            }), Object(r.jsxs)(Un, {
                                children: [Object(r.jsx)("div", {}), Object(r.jsxs)(El, {
                                    children: [null === g || void 0 === g || null === (i = g.invert()) || void 0 === i ? void 0 : i.toSignificant(6), " ETH/", u.symbol]
                                })]
                            }), Object(r.jsxs)(Un, {
                                children: [Object(r.jsx)(Tl, {
                                    color: "inherit",
                                    children: "Price Difference:"
                                }), Object(r.jsxs)(El, {
                                    color: "inherit",
                                    children: [null === Y || void 0 === Y ? void 0 : Y.toSignificant(4), "%"]
                                })]
                            })]
                        })]
                    }) : null, x && Object(r.jsxs)(Vt, {
                        children: [Object(r.jsx)(Tl, {
                            style: {
                                marginBottom: 8,
                                fontWeight: 400
                            },
                            children: "You are the first liquidity provider for this pair on Uniswap V2. Your liquidity will be migrated at the current V1 price. Your transaction cost also includes the gas to create the pool."
                        }), Object(r.jsxs)(Qe, {
                            gap: "8px",
                            children: [Object(r.jsxs)(Un, {
                                children: [Object(r.jsx)(Tl, {
                                    children: "V1 Price:"
                                }), Object(r.jsxs)(El, {
                                    children: [null === D || void 0 === D ? void 0 : D.toSignificant(6), " ", u.symbol, "/ETH"]
                                })]
                            }), Object(r.jsxs)(Un, {
                                children: [Object(r.jsx)("div", {}), Object(r.jsxs)(El, {
                                    children: [null === D || void 0 === D || null === (o = D.invert()) || void 0 === o ? void 0 : o.toSignificant(6), " ETH/", u.symbol]
                                })]
                            })]
                        })]
                    }), Object(r.jsxs)(Yt, {
                        children: [Object(r.jsx)(Ml, {
                            token: u,
                            liquidityTokenAmount: c,
                            tokenWorth: _,
                            ethWorth: R
                        }), Object(r.jsxs)("div", {
                            style: {
                                display: "flex",
                                marginTop: "1rem"
                            },
                            children: [Object(r.jsx)(Qe, {
                                gap: "12px",
                                style: {
                                    flex: "1",
                                    marginRight: 12
                                },
                                children: Object(r.jsx)(s.c, {
                                    variant: M === xu.APPROVED ? "success" : "primary",
                                    disabled: M !== xu.NOT_APPROVED,
                                    onClick: L,
                                    children: M === xu.PENDING ? Object(r.jsx)(Ns, {
                                        children: "Approving"
                                    }) : M === xu.APPROVED ? "Approved" : "Approve"
                                })
                            }), Object(r.jsx)(Qe, {
                                gap: "12px",
                                style: {
                                    flex: "1"
                                },
                                children: Object(r.jsx)(s.c, {
                                    variant: J ? "success" : "primary",
                                    disabled: J || G || W || M !== xu.APPROVED || k,
                                    onClick: Q,
                                    children: J ? "Success" : W ? Object(r.jsx)(Ns, {
                                        children: "Migrating"
                                    }) : "Migrate"
                                })
                            })]
                        })]
                    }), Object(r.jsx)(Al, {
                        style: {
                            textAlign: "center"
                        },
                        children: "Your Uniswap V1 ".concat(u.symbol, "/ETH liquidity will become Uniswap V2 ").concat(u.symbol, "/ETH liquidity.")
                    })]
                })
            }

            function Dl(e) {
                var n, t, i = e.history,
                    o = e.match.params.address,
                    c = Qn(o),
                    u = Ue(),
                    l = u.chainId,
                    d = u.account,
                    p = null === (n = da(Ja(c || void 0), "tokenAddress", void 0, aa)) || void 0 === n || null === (t = n.result) || void 0 === t ? void 0 : t[0],
                    b = ai(p),
                    f = ui(null !== d && void 0 !== d ? d : void 0, Object(a.useMemo)((function() {
                        return c && l && b ? new U.l(l, c, 18, "UNI-V1-".concat(b.symbol), "Uniswap V1") : void 0
                    }), [l, c, b]));
                return c && p !== Vn.a ? Object(r.jsx)($u, {
                    children: Object(r.jsxs)(Qe, {
                        gap: "16px",
                        children: [Object(r.jsxs)(Pn, {
                            style: {
                                alignItems: "center",
                                justifyContent: "space-between"
                            },
                            gap: "8px",
                            children: [Object(r.jsx)(wn, {
                                to: "/migrate/v1"
                            }), Object(r.jsx)(Cl, {
                                children: "Migrate V1 Liquidity"
                            }), Object(r.jsx)("div", {
                                children: Object(r.jsx)(Ki, {
                                    text: "Migrate your liquidity tokens from Uniswap V1 to Uniswap V2."
                                })
                            })]
                        }), d ? c && l && (null === b || void 0 === b ? void 0 : b.equals(U.p[l])) ? Object(r.jsxs)(r.Fragment, {
                            children: [Object(r.jsx)(Tl, {
                                my: 9,
                                style: {
                                    fontWeight: 400
                                },
                                children: "Because Uniswap V2 uses WETH under the hood, your Uniswap V1 WETH/ETH liquidity cannot be migrated. You may want to remove your liquidity instead."
                            }), Object(r.jsx)(s.c, {
                                onClick: function() {
                                    i.push("/remove/v1/".concat(c))
                                },
                                children: "Remove"
                            })]
                        }) : f && b ? Object(r.jsx)(Ll, {
                            liquidityTokenAmount: f,
                            token: b
                        }) : Object(r.jsx)(yl, {
                            message: "Loading..."
                        }) : Object(r.jsx)(kl, {
                            children: "You must connect an account."
                        })]
                    })
                }) : (console.error("Invalid address in path", o), Object(r.jsx)(m.a, {
                    to: "/migrate/v1"
                }))
            }
            var zl = Cn.body,
                Yl = Cn.darkGray,
                ql = Cn.mediumHeader,
                Fl = Cn.largeHeader,
                Vl = U.f.exponentiate(U.f.BigInt(10), U.f.BigInt(18)),
                Wl = U.f.BigInt(0),
                Hl = U.f.BigInt(1),
                Ql = new U.e(Wl, Hl);

            function Gl(e) {
                var n, t = e.exchangeContract,
                    i = e.liquidityTokenAmount,
                    o = e.token,
                    c = Ue().chainId,
                    u = cs(i.token),
                    l = null === (n = oi([i.token.address])) || void 0 === n ? void 0 : n[i.token.address],
                    d = ui(i.token.address, o),
                    p = Object(a.useState)(!1),
                    b = Object(f.a)(p, 2),
                    j = b[0],
                    m = b[1],
                    h = Object(a.useState)(null),
                    v = Object(f.a)(h, 2),
                    y = v[0],
                    O = v[1],
                    x = u ? new U.h(i.raw, u.raw) : Ql,
                    g = l ? U.c.ether(l.multiply(x).multiply(Vl).quotient) : U.c.ether(Wl),
                    w = d ? new U.m(o, x.multiply(d.raw).quotient) : new U.m(o, Wl),
                    C = hu(),
                    k = yu(null !== y && void 0 !== y ? y : void 0),
                    T = Object(a.useCallback)((function() {
                        i && (m(!0), t.removeLiquidity(i.raw.toString(), 1, 1, Math.floor((new Date).getTime() / 1e3) + we).then((function(e) {
                            C(e, {
                                summary: "Remove ".concat(c && o.equals(U.p[c]) ? "WETH" : o.symbol, "/ETH V1 liquidity")
                            }), O(e.hash)
                        })).catch((function(e) {
                            console.error(e), m(!1)
                        })))
                    }), [t, i, o, c, C]),
                    I = !!i && i.equalTo(Wl),
                    E = !!y && I;
                return Object(r.jsxs)(Qe, {
                    gap: "20px",
                    children: [Object(r.jsx)(zl, {
                        my: 9,
                        style: {
                            fontWeight: 400
                        },
                        children: "This tool will remove your V1 liquidity and send the underlying assets to your wallet."
                    }), Object(r.jsxs)(Yt, {
                        children: [Object(r.jsx)(Ml, {
                            token: o,
                            liquidityTokenAmount: i,
                            tokenWorth: w,
                            ethWorth: g
                        }), Object(r.jsx)("div", {
                            style: {
                                display: "flex",
                                marginTop: "1rem"
                            },
                            children: Object(r.jsx)(s.c, {
                                variant: E ? "success" : "primary",
                                disabled: E || I || k || j,
                                onClick: T,
                                children: E ? "Success" : k ? Object(r.jsx)(Ns, {
                                    children: "Removing"
                                }) : "Remove"
                            })
                        })]
                    }), Object(r.jsx)(Yl, {
                        style: {
                            textAlign: "center"
                        },
                        children: "Your Uniswap V1 ".concat(c && o.equals(U.p[c]) ? "WETH" : o.symbol, "/ETH liquidity will be redeemed for underlying assets.")
                    })]
                })
            }

            function Kl(e) {
                var n, t, i = e.match.params.address,
                    o = Qn(i),
                    c = Ue(),
                    s = c.chainId,
                    u = c.account,
                    l = Ja(o || void 0, !0),
                    d = null === (n = da(l, "tokenAddress", void 0, aa)) || void 0 === n || null === (t = n.result) || void 0 === t ? void 0 : t[0],
                    p = ai(d),
                    b = ui(null !== u && void 0 !== u ? u : void 0, Object(a.useMemo)((function() {
                        return o && s && p ? new U.l(s, o, 18, "UNI-V1-".concat(p.symbol), "Uniswap V1") : void 0
                    }), [s, o, p]));
                return o && d !== Vn.a ? Object(r.jsx)($u, {
                    children: Object(r.jsxs)(Qe, {
                        gap: "16px",
                        children: [Object(r.jsxs)(Pn, {
                            style: {
                                alignItems: "center",
                                justifyContent: "space-between"
                            },
                            gap: "8px",
                            children: [Object(r.jsx)(wn, {
                                to: "/migrate/v1"
                            }), Object(r.jsx)(ql, {
                                children: "Remove V1 Liquidity"
                            }), Object(r.jsx)("div", {
                                children: Object(r.jsx)(Ki, {
                                    text: "Remove your Uniswap V1 liquidity tokens."
                                })
                            })]
                        }), u ? b && p && l ? Object(r.jsx)(Gl, {
                            exchangeContract: l,
                            liquidityTokenAmount: b,
                            token: p
                        }) : Object(r.jsx)(yl, {
                            message: "Loading..."
                        }) : Object(r.jsx)(Fl, {
                            children: "You must connect an account."
                        })]
                    })
                }) : (console.error("Invalid address in path", i), Object(r.jsx)(m.a, {
                    to: "/migrate/v1"
                }))
            }

            function Jl() {
                var e = Object(u.a)(["\n  align-items: center;\n  display: flex;\n  margin-bottom: 8px;\n"]);
                return Jl = function() {
                    return e
                }, e
            }

            function Xl() {
                var e = Object(u.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n\n  ", ":first-child {\n    padding-left: 0;\n  }\n\n  ", ":last-child {\n    padding-right: 0;\n  }\n\n  ", " {\n    flex-direction: row;\n  }\n"]);
                return Xl = function() {
                    return e
                }, e
            }

            function Zl() {
                var e = Object(u.a)(["\n  padding: 0 4px;\n"]);
                return Zl = function() {
                    return e
                }, e
            }

            function $l() {
                var e = Object(u.a)(["\n  margin-bottom: 16px;\n"]);
                return $l = function() {
                    return e
                }, e
            }
            var ed = l.default.div($l()),
                nd = l.default.div(Zl()),
                td = l.default.div(Xl(), nd, nd, (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                rd = l.default.div(Jl()),
                ad = [{
                    label: "0.1%",
                    value: .1
                }, {
                    label: "0.5%",
                    value: .5
                }, {
                    label: "1%",
                    value: 1
                }],
                id = function() {
                    var e = Aa(),
                        n = Object(f.a)(e, 2),
                        t = n[0],
                        i = n[1],
                        o = Object(a.useState)(t / 100),
                        c = Object(f.a)(o, 2),
                        u = c[0],
                        l = c[1],
                        d = Object(a.useState)(null),
                        p = Object(f.a)(d, 2),
                        b = p[0],
                        j = p[1];
                    return Object(a.useEffect)((function() {
                        try {
                            var e = 100 * u;
                            !Number.isNaN(e) && e > 0 && e < 5e3 ? (i(e), j(null)) : j("Enter a valid slippage percentage")
                        } catch (n) {
                            j("Enter a valid slippage percentage")
                        }
                    }), [u, j, i]), Object(a.useEffect)((function() {
                        t < 50 ? j("Your transaction may fail") : t > 500 && j("Your transaction may be frontrun")
                    }), [t, j]), Object(r.jsxs)(ed, {
                        children: [Object(r.jsxs)(rd, {
                            children: [Object(r.jsx)(s.v, {
                                style: {
                                    fontWeight: 600
                                },
                                children: Object(r.jsx)(Ar, {
                                    translationId: 88,
                                    children: "Slippage tolerance"
                                })
                            }), Object(r.jsx)(Ki, {
                                text: "Your transaction will revert if the price changes unfavorably by more than this percentage."
                            })]
                        }), Object(r.jsxs)(td, {
                            children: [Object(r.jsx)(s.l, {
                                mb: ["8px", 0],
                                mr: [0, "8px"],
                                children: ad.map((function(e) {
                                    var n = e.label,
                                        t = e.value;
                                    return Object(r.jsx)(nd, {
                                        children: Object(r.jsx)(s.c, {
                                            variant: u === t ? "primary" : "tertiary",
                                            onClick: function() {
                                                return l(t)
                                            },
                                            children: n
                                        })
                                    }, t)
                                }))
                            }), Object(r.jsxs)(s.l, {
                                alignItems: "center",
                                children: [Object(r.jsx)(nd, {
                                    children: Object(r.jsx)(s.o, {
                                        type: "number",
                                        scale: "lg",
                                        step: .1,
                                        min: .1,
                                        placeholder: "5%",
                                        value: u,
                                        onChange: function(e) {
                                            var n = e.target.value;
                                            l(parseFloat(n))
                                        },
                                        isWarning: null !== b
                                    })
                                }), Object(r.jsx)(nd, {
                                    children: Object(r.jsx)(s.v, {
                                        fontSize: "18px",
                                        children: "%"
                                    })
                                })]
                            })]
                        }), b && Object(r.jsx)(s.v, {
                            mt: "8px",
                            color: "failure",
                            children: b
                        })]
                    })
                };

            function od() {
                var e = Object(u.a)(["\n  align-items: center;\n  display: inline-flex;\n\n  & > ", " {\n    max-width: 100px;\n  }\n\n  & > ", " {\n    font-size: 14px;\n    margin-left: 8px;\n  }\n"]);
                return od = function() {
                    return e
                }, e
            }

            function cd() {
                var e = Object(u.a)(["\n  align-items: center;\n  display: flex;\n  margin-bottom: 8px;\n"]);
                return cd = function() {
                    return e
                }, e
            }

            function sd() {
                var e = Object(u.a)(["\n  margin-bottom: 16px;\n"]);
                return sd = function() {
                    return e
                }, e
            }
            var ud = l.default.div(sd()),
                ld = l.default.div(cd()),
                dd = l.default.div(od(), s.o, s.v),
                pd = function() {
                    var e = Na(),
                        n = Object(f.a)(e, 2),
                        t = n[0],
                        i = n[1],
                        o = Object(a.useState)(t / 60),
                        c = Object(f.a)(o, 2),
                        u = c[0],
                        l = c[1],
                        d = Object(a.useState)(null),
                        p = Object(f.a)(d, 2),
                        b = p[0],
                        j = p[1];
                    return Object(a.useEffect)((function() {
                        try {
                            var e = 60 * u;
                            !Number.isNaN(e) && e > 0 ? (i(e), j(null)) : j("Enter a valid deadline")
                        } catch (n) {
                            j("Enter a valid deadline")
                        }
                    }), [u, j, i]), Object(r.jsxs)(ud, {
                        children: [Object(r.jsxs)(ld, {
                            children: [Object(r.jsx)(s.v, {
                                style: {
                                    fontWeight: 600
                                },
                                children: Object(r.jsx)(Ar, {
                                    translationId: 90,
                                    children: "Transaction deadline"
                                })
                            }), Object(r.jsx)(Ki, {
                                text: "Your transaction will revert if it is pending for more than this long."
                            })]
                        }), Object(r.jsxs)(dd, {
                            children: [Object(r.jsx)(s.o, {
                                type: "number",
                                step: "1",
                                min: "1",
                                value: u,
                                onChange: function(e) {
                                    var n = e.target.value;
                                    l(parseInt(n, 10))
                                }
                            }), Object(r.jsx)(s.v, {
                                children: "Minutes"
                            })]
                        }), b && Object(r.jsx)(s.v, {
                            mt: "8px",
                            color: "failure",
                            children: b
                        })]
                    })
                },
                bd = function() {
                    return null
                },
                fd = function(e) {
                    var n = e.onDismiss,
                        t = void 0 === n ? bd : n;
                    return Object(r.jsxs)(s.r, {
                        title: "Settings",
                        onDismiss: t,
                        children: [Object(r.jsx)(id, {}), Object(r.jsx)(pd, {})]
                    })
                },
                jd = function() {
                    return null
                },
                md = function(e, n) {
                    return n.addedTime - e.addedTime
                },
                hd = function(e) {
                    var n = e.onDismiss,
                        t = void 0 === n ? jd : n,
                        i = Ue(),
                        o = i.account,
                        c = i.chainId,
                        u = vu(),
                        l = Object(a.useMemo)((function() {
                            return Object.values(u).filter(Ou).sort(md)
                        }), [u]);
                    return Object(r.jsxs)(s.r, {
                        title: "Recent Transactions",
                        onDismiss: t,
                        children: [!o && Object(r.jsxs)(s.l, {
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center",
                            children: [Object(r.jsx)(s.v, {
                                mb: "8px",
                                bold: !0,
                                children: "Please connect your wallet to view your recent transactions"
                            }), Object(r.jsx)(s.c, {
                                variant: "tertiary",
                                size: "sm",
                                onClick: t,
                                children: "Close"
                            })]
                        }), o && c && 0 === l.length && Object(r.jsxs)(s.l, {
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center",
                            children: [Object(r.jsx)(s.v, {
                                mb: "8px",
                                bold: !0,
                                children: "No recent transactions"
                            }), Object(r.jsx)(s.c, {
                                variant: "tertiary",
                                size: "sm",
                                onClick: t,
                                children: "Close"
                            })]
                        }), o && c && l.map((function(e) {
                            var n = e.hash,
                                t = e.summary,
                                a = function(e) {
                                    var n = e.hash,
                                        t = e.receipt;
                                    return n ? n && 1 === (null === t || void 0 === t ? void 0 : t.status) ? {
                                        icon: Object(r.jsx)(s.h, {
                                            color: "success"
                                        }),
                                        color: "success"
                                    } : {
                                        icon: Object(r.jsx)(s.k, {
                                            color: "failure"
                                        }),
                                        color: "failure"
                                    } : {
                                        icon: Object(r.jsx)(Tt, {}),
                                        color: "text"
                                    }
                                }(e),
                                i = a.icon,
                                o = a.color;
                            return Object(r.jsx)(r.Fragment, {
                                children: Object(r.jsxs)(s.l, {
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    mb: "4px",
                                    children: [Object(r.jsx)(s.p, {
                                        href: Kn(c, n, "transaction"),
                                        color: o,
                                        children: null !== t && void 0 !== t ? t : n
                                    }), i]
                                }, n)
                            })
                        }))]
                    })
                };

            function vd() {
                var e = Object(u.a)(["\n  flex: 1;\n"]);
                return vd = function() {
                    return e
                }, e
            }

            function yd() {
                var e = Object(u.a)(["\n  border-bottom: 1px solid ", ";\n  padding: 24px;\n"]);
                return yd = function() {
                    return e
                }, e
            }
            var Od, xd = function() {
                    return Object(r.jsx)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: Object(r.jsx)("path", {
                            d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z",
                            fill: "currentColor"
                        })
                    })
                },
                gd = function() {
                    return Object(r.jsx)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: Object(r.jsx)("path", {
                            d: "M13 3C8.03 3 4 7.03 4 12H1L4.89 15.89L4.96 16.03L9 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C8.27 19.99 10.51 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z",
                            fill: "currentColor"
                        })
                    })
                },
                wd = l.default.div(yd(), (function(e) {
                    return e.theme.colors.borderColor
                })),
                Cd = l.default.div(vd()),
                kd = function(e) {
                    var n = e.title,
                        t = e.description,
                        a = e.children,
                        i = Object(s.y)(Object(r.jsx)(fd, {})),
                        o = Object(f.a)(i, 1)[0],
                        c = Object(s.y)(Object(r.jsx)(hd, {})),
                        u = Object(f.a)(c, 1)[0];
                    return Object(r.jsxs)(wd, {
                        children: [Object(r.jsxs)(s.l, {
                            alignItems: "center",
                            children: [Object(r.jsxs)(Cd, {
                                children: [Object(r.jsx)(s.m, {
                                    mb: "8px",
                                    children: n
                                }), t && Object(r.jsx)(s.v, {
                                    color: "textSubtle",
                                    fontSize: "14px",
                                    children: t
                                })]
                            }), Object(r.jsx)(s.n, {
                                variant: "text",
                                onClick: o,
                                title: "Settings",
                                children: Object(r.jsx)(xd, {})
                            }), Object(r.jsx)(s.n, {
                                variant: "text",
                                onClick: u,
                                title: "Recent transactions",
                                children: Object(r.jsx)(gd, {})
                            })]
                        }), a && Object(r.jsx)(s.v, {
                            mt: "16px",
                            children: a
                        })]
                    })
                },
                Td = Cn.body;

            function Id() {
                var e = Object(a.useContext)(l.ThemeContext),
                    n = Ue().account,
                    t = function() {
                        var e = Ue().chainId,
                            n = ni(),
                            t = Object(a.useMemo)((function() {
                                var n;
                                return e && null !== (n = Oe[e]) && void 0 !== n ? n : []
                            }), [e]),
                            r = Object(a.useMemo)((function() {
                                return e ? ba()(Object.keys(n), (function(t) {
                                    var r, a = n[t];
                                    return (null !== (r = ye[e]) && void 0 !== r ? r : []).map((function(e) {
                                        return e.address === a.address ? null : [e, a]
                                    })).filter((function(e) {
                                        return null !== e
                                    }))
                                })) : []
                            }), [n, e]),
                            i = Object(h.d)((function(e) {
                                return e.user.pairs
                            })),
                            o = Object(a.useMemo)((function() {
                                if (!e || !i) return [];
                                var n = i[e];
                                return n ? Object.keys(n).map((function(e) {
                                    return [Ia(n[e].token0), Ia(n[e].token1)]
                                })) : []
                            }), [i, e]),
                            c = Object(a.useMemo)((function() {
                                return o.concat(r).concat(t)
                            }), [r, t, o]);
                        return Object(a.useMemo)((function() {
                            var e = c.reduce((function(e, n) {
                                var t = Object(f.a)(n, 2),
                                    r = t[0],
                                    a = t[1],
                                    i = r.sortsBefore(a),
                                    o = i ? "".concat(r.address, ":").concat(a.address) : "".concat(a.address, ":").concat(r.address);
                                return e[o] || (e[o] = i ? [r, a] : [a, r]), e
                            }), {});
                            return Object.keys(e).map((function(n) {
                                return e[n]
                            }))
                        }), [c])
                    }(),
                    i = Object(a.useMemo)((function() {
                        return t.map((function(e) {
                            return {
                                liquidityToken: _a(e),
                                tokens: e
                            }
                        }))
                    }), [t]),
                    o = ci(null !== n && void 0 !== n ? n : void 0, Object(a.useMemo)((function() {
                        return i.map((function(e) {
                            return e.liquidityToken
                        }))
                    }), [i])),
                    c = Object(f.a)(o, 2),
                    u = c[0],
                    d = c[1],
                    p = Object(a.useMemo)((function() {
                        return i.filter((function(e) {
                            var n, t = e.liquidityToken;
                            return null === (n = u[t.address]) || void 0 === n ? void 0 : n.greaterThan("0")
                        }))
                    }), [i, u]),
                    b = Fs(p.map((function(e) {
                        return e.tokens
                    }))),
                    m = d || (null === b || void 0 === b ? void 0 : b.length) < p.length || (null === b || void 0 === b ? void 0 : b.some((function(e) {
                        return !e
                    }))),
                    v = b.map((function(e) {
                        return Object(f.a)(e, 2)[1]
                    })).filter((function(e) {
                        return Boolean(e)
                    })),
                    y = function() {
                        var e = Ue(),
                            n = e.account,
                            t = e.chainId,
                            r = nu(),
                            i = si(null !== n && void 0 !== n ? n : void 0, Object(a.useMemo)((function() {
                                return t ? Object.keys(r).map((function(e) {
                                    return new U.l(t, e, 18, "UNI-V1", "Uniswap V1")
                                })) : []
                            }), [t, r]));
                        return Object(a.useMemo)((function() {
                            return Object.keys(i).some((function(e) {
                                var n, t = null === (n = i[e]) || void 0 === n ? void 0 : n.raw;
                                return t && U.f.greaterThan(t, U.f.BigInt(0))
                            }))
                        }), [i])
                    }();
                return Object(r.jsxs)(r.Fragment, {
                    children: [Object(r.jsx)(Ur, {
                        activeIndex: 1
                    }), Object(r.jsxs)(el, {
                        children: [Object(r.jsx)(kd, {
                            title: "Liquidity",
                            description: "Add liquidity to receive LP tokens",
                            children: Object(r.jsx)(s.c, {
                                id: "join-pool-button",
                                as: j.b,
                                to: "/add/ETH",
                                children: Object(r.jsx)(Ar, {
                                    translationId: 100,
                                    children: "Add Liquidity"
                                })
                            })
                        }), Object(r.jsx)(Qe, {
                            gap: "lg",
                            justify: "center",
                            children: Object(r.jsx)(s.g, {
                                children: Object(r.jsxs)(Qe, {
                                    gap: "12px",
                                    style: {
                                        width: "100%"
                                    },
                                    children: [Object(r.jsxs)(Un, {
                                        padding: "0 8px",
                                        children: [Object(r.jsx)(s.v, {
                                            color: e.colors.text,
                                            children: Object(r.jsx)(Ar, {
                                                translationId: 102,
                                                children: "Your Liquidity"
                                            })
                                        }), Object(r.jsx)(Ki, {
                                            text: Ir(130, "When you add liquidity, you are given pool tokens that represent your share. If you don\u2019t see a pool you joined in this list, try importing a pool below.")
                                        })]
                                    }), n ? m ? Object(r.jsx)(Yt, {
                                        padding: "40px",
                                        children: Object(r.jsx)(Td, {
                                            color: e.colors.textDisabled,
                                            textAlign: "center",
                                            children: Object(r.jsx)(Ns, {
                                                children: "Loading"
                                            })
                                        })
                                    }) : (null === v || void 0 === v ? void 0 : v.length) > 0 ? Object(r.jsx)(r.Fragment, {
                                        children: v.map((function(e) {
                                            return Object(r.jsx)(zs, {
                                                pair: e
                                            }, e.liquidityToken.address)
                                        }))
                                    }) : Object(r.jsx)(Yt, {
                                        padding: "40px",
                                        children: Object(r.jsx)(Td, {
                                            color: e.colors.textDisabled,
                                            textAlign: "center",
                                            children: Object(r.jsx)(Ar, {
                                                translationId: 104,
                                                children: "No liquidity found."
                                            })
                                        })
                                    }) : Object(r.jsx)(Yt, {
                                        padding: "40px",
                                        children: Object(r.jsx)(Td, {
                                            color: e.colors.textDisabled,
                                            textAlign: "center",
                                            children: "Connect to a wallet to view your liquidity."
                                        })
                                    }), Object(r.jsxs)("div", {
                                        children: [Object(r.jsxs)(s.v, {
                                            fontSize: "14px",
                                            style: {
                                                padding: ".5rem 0 .5rem 0"
                                            },
                                            children: [y ? "Uniswap V1 liquidity found!" : Ir(106, "Don't see a pool you joined?"), " ", Object(r.jsx)(hn, {
                                                id: "import-pool-link",
                                                to: y ? "/migrate/v1" : "/find",
                                                children: y ? "Migrate now." : Ir(108, "Import it.")
                                            })]
                                        }), Object(r.jsx)(s.v, {
                                            fontSize: "14px",
                                            style: {
                                                padding: ".5rem 0 .5rem 0"
                                            },
                                            children: "Or, if you staked your LP tokens in a farm, unstake them to see them here."
                                        })]
                                    })]
                                })
                            })
                        })]
                    })]
                })
            }

            function Ed() {
                var e, n = Ue().account,
                    t = Object(a.useState)(!1),
                    i = Object(f.a)(t, 2),
                    o = i[0],
                    c = i[1],
                    u = Object(a.useState)(Od.TOKEN1),
                    l = Object(f.a)(u, 2),
                    d = l[0],
                    p = l[1],
                    b = Object(a.useState)(U.d),
                    j = Object(f.a)(b, 2),
                    m = j[0],
                    v = j[1],
                    y = Object(a.useState)(null),
                    O = Object(f.a)(y, 2),
                    x = O[0],
                    g = O[1],
                    w = Vs(null !== m && void 0 !== m ? m : void 0, null !== x && void 0 !== x ? x : void 0),
                    C = Object(f.a)(w, 2),
                    k = C[0],
                    T = C[1],
                    I = function() {
                        var e = Object(h.c)();
                        return Object(a.useCallback)((function(n) {
                            e(xa({
                                serializedPair: Ua(n)
                            }))
                        }), [e])
                    }();
                Object(a.useEffect)((function() {
                    T && I(T)
                }), [T, I]);
                var E = k === Ys.NOT_EXISTS || Boolean(k === Ys.EXISTS && T && U.f.equal(T.reserve0.raw, U.f.BigInt(0)) && U.f.equal(T.reserve1.raw, U.f.BigInt(0))),
                    A = ui(null !== n && void 0 !== n ? n : void 0, null === T || void 0 === T ? void 0 : T.liquidityToken),
                    N = Boolean(A && U.f.greaterThan(A.raw, U.f.BigInt(0))),
                    S = Object(a.useCallback)((function(e) {
                        d === Od.TOKEN0 ? v(e) : g(e)
                    }), [d]),
                    R = Object(a.useCallback)((function() {
                        c(!1)
                    }), [c]),
                    _ = Object(r.jsx)(Yt, {
                        padding: "45px 10px",
                        children: Object(r.jsx)(s.v, {
                            style: {
                                textAlign: "center"
                            },
                            children: n ? "Select a token to find your liquidity." : "Connect to a wallet to find pools"
                        })
                    });
                return Object(r.jsxs)(r.Fragment, {
                    children: [Object(r.jsx)(Ur, {
                        activeIndex: 1
                    }), Object(r.jsxs)(el, {
                        children: [Object(r.jsx)(rs, {}), Object(r.jsxs)(s.g, {
                            children: [Object(r.jsxs)(Qe, {
                                gap: "md",
                                children: [Object(r.jsx)(s.c, {
                                    onClick: function() {
                                        c(!0), p(Od.TOKEN0)
                                    },
                                    startIcon: m ? Object(r.jsx)(ro, {
                                        currency: m,
                                        style: {
                                            marginRight: ".5rem"
                                        }
                                    }) : null,
                                    endIcon: Object(r.jsx)(s.i, {
                                        width: "24px",
                                        color: "white"
                                    }),
                                    fullWidth: !0,
                                    children: m ? m.symbol : Object(r.jsx)(Ar, {
                                        translationId: 82,
                                        children: "Select a Token"
                                    })
                                }), Object(r.jsx)(He, {
                                    children: Object(r.jsx)(s.a, {
                                        color: "textSubtle"
                                    })
                                }), Object(r.jsx)(s.c, {
                                    onClick: function() {
                                        c(!0), p(Od.TOKEN1)
                                    },
                                    startIcon: x ? Object(r.jsx)(ro, {
                                        currency: x,
                                        style: {
                                            marginRight: ".5rem"
                                        }
                                    }) : null,
                                    endIcon: Object(r.jsx)(s.i, {
                                        width: "24px",
                                        color: "white"
                                    }),
                                    fullWidth: !0,
                                    children: x ? x.symbol : Object(r.jsx)(Ar, {
                                        translationId: 82,
                                        children: "Select a Token"
                                    })
                                }), N && Object(r.jsx)(He, {
                                    style: {
                                        justifyItems: "center",
                                        backgroundColor: "",
                                        padding: "12px 0px",
                                        borderRadius: "12px"
                                    },
                                    children: Object(r.jsx)(s.v, {
                                        style: {
                                            textAlign: "center"
                                        },
                                        children: "Pool Found!"
                                    })
                                }), m && x ? k === Ys.EXISTS ? N && T ? Object(r.jsx)(Ds, {
                                    pair: T
                                }) : Object(r.jsx)(Yt, {
                                    padding: "45px 10px",
                                    children: Object(r.jsxs)(Qe, {
                                        gap: "sm",
                                        justify: "center",
                                        children: [Object(r.jsx)(s.v, {
                                            style: {
                                                textAlign: "center"
                                            },
                                            children: "You don\u2019t have liquidity in this pool yet."
                                        }), Object(r.jsx)(hn, {
                                            to: "/add/".concat(ss(m), "/").concat(ss(x)),
                                            children: Object(r.jsx)(s.v, {
                                                style: {
                                                    textAlign: "center"
                                                },
                                                children: Object(r.jsx)(Ar, {
                                                    translationId: 100,
                                                    children: "Add Liquidity"
                                                })
                                            })
                                        })]
                                    })
                                }) : E ? Object(r.jsx)(Yt, {
                                    padding: "45px 10px",
                                    children: Object(r.jsxs)(Qe, {
                                        gap: "sm",
                                        justify: "center",
                                        children: [Object(r.jsx)(s.v, {
                                            style: {
                                                textAlign: "center"
                                            },
                                            children: "No pool found."
                                        }), Object(r.jsx)(hn, {
                                            to: "/add/".concat(ss(m), "/").concat(ss(x)),
                                            children: "Create pool."
                                        })]
                                    })
                                }) : k === Ys.INVALID ? Object(r.jsx)(Yt, {
                                    padding: "45px 10px",
                                    children: Object(r.jsx)(Qe, {
                                        gap: "sm",
                                        justify: "center",
                                        children: Object(r.jsx)(s.v, {
                                            style: {
                                                textAlign: "center"
                                            },
                                            children: Object(r.jsx)(Ar, {
                                                translationId: 136,
                                                children: "Invalid pair."
                                            })
                                        })
                                    })
                                }) : k === Ys.LOADING ? Object(r.jsx)(Yt, {
                                    padding: "45px 10px",
                                    children: Object(r.jsx)(Qe, {
                                        gap: "sm",
                                        justify: "center",
                                        children: Object(r.jsxs)(s.v, {
                                            style: {
                                                textAlign: "center"
                                            },
                                            children: ["Loading", Object(r.jsx)(cl, {})]
                                        })
                                    })
                                }) : null : _]
                            }), Object(r.jsx)(wc, {
                                isOpen: o,
                                onCurrencySelect: S,
                                onDismiss: R,
                                showCommonBases: !0,
                                selectedCurrency: null !== (e = d === Od.TOKEN0 ? x : m) && void 0 !== e ? e : void 0
                            })]
                        })]
                    })]
                })
            }! function(e) {
                e[e.TOKEN0 = 0] = "TOKEN0", e[e.TOKEN1 = 1] = "TOKEN1"
            }(Od || (Od = {}));
            var Ad = t(3),
                Nd = t(438),
                Sd = t(439);

            function Rd() {
                var e = Object(u.a)(["\n  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n  width: 100%; /* Specific width is required for Firefox. */\n  background: transparent; /* Otherwise white in Chrome */\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    height: ", "px;\n    width: ", "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    border: none;\n    transform: translateY(-50%);\n    color: ", ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-moz-range-thumb {\n    height: ", "px;\n    width: ", "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    border: none;\n    color: ", ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-ms-thumb {\n    height: ", "px;\n    width: ", "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    color: ", ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-webkit-slider-runnable-track {\n    background: linear-gradient(\n      90deg,\n      ", ",\n      ", "\n    );\n    height: 2px;\n  }\n\n  &::-moz-range-track {\n    background: linear-gradient(\n      90deg,\n      ", ",\n      ", "\n    );\n    height: 2px;\n  }\n\n  &::-ms-track {\n    width: 100%;\n    border-color: transparent;\n    color: transparent;\n\n    background: ", ";\n    height: 2px;\n  }\n  &::-ms-fill-lower {\n    background: ", ";\n  }\n  &::-ms-fill-upper {\n    background: ", ";\n  }\n"]);
                return Rd = function() {
                    return e
                }, e
            }
            var Ud, _d = l.default.input(Rd(), (function(e) {
                return e.size
            }), (function(e) {
                return e.size
            }), (function(e) {
                return e.theme.colors.invertedContrast
            }), (function(e) {
                return e.size
            }), (function(e) {
                return e.size
            }), (function(e) {
                return e.theme.colors.invertedContrast
            }), (function(e) {
                return e.size
            }), (function(e) {
                return e.size
            }), (function(e) {
                return e.theme.colors.invertedContrast
            }), (function(e) {
                return e.theme.colors.primaryDark
            }), (function(e) {
                return e.theme.colors.tertiary
            }), (function(e) {
                return e.theme.colors.primaryDark
            }), (function(e) {
                return e.theme.colors.tertiary
            }), (function(e) {
                return e.theme.colors.primaryDark
            }), (function(e) {
                return e.theme.colors.primaryDark
            }), (function(e) {
                return e.theme.colors.tertiary
            }));

            function Pd(e) {
                var n = e.value,
                    t = e.onChange,
                    i = e.min,
                    o = void 0 === i ? 0 : i,
                    c = e.step,
                    s = void 0 === c ? 1 : c,
                    u = e.max,
                    l = void 0 === u ? 100 : u,
                    d = e.size,
                    p = void 0 === d ? 28 : d,
                    b = Object(a.useCallback)((function(e) {
                        t(parseInt(e.target.value))
                    }), [t]);
                return Object(r.jsx)(_d, {
                    size: p,
                    type: "range",
                    value: n,
                    style: {
                        width: "90%",
                        marginLeft: 15,
                        marginRight: 15,
                        padding: "15px 0"
                    },
                    onChange: b,
                    "aria-labelledby": "input slider",
                    step: s,
                    min: o,
                    max: l
                })
            }! function(e) {
                e.LIQUIDITY_PERCENT = "LIQUIDITY_PERCENT", e.LIQUIDITY = "LIQUIDITY", e.CURRENCY_A = "CURRENCY_A", e.CURRENCY_B = "CURRENCY_B"
            }(Ud || (Ud = {}));
            var Bd = Object(_e.b)("burn/typeInputBurn");

            function Md() {
                return Object(h.d)((function(e) {
                    return e.burn
                }))
            }

            function Ld() {
                var e = Object(u.a)(["\n  padding-left: 24px;\n  padding-right: 24px;\n"]);
                return Ld = function() {
                    return e
                }, e
            }

            function Dd() {
                var e = Object(u.a)(["\n  border: 1px solid ", ";\n  border-radius: 16px;\n  padding: 24px;\n"]);
                return Dd = function() {
                    return e
                }, e
            }
            var zd = Cn.italic,
                Yd = l.default.div(Dd(), (function(e) {
                    return e.theme.colors.borderColor
                })),
                qd = l.default.div(Ld());

            function Fd(e) {
                var n, t, i, o, c, u, d, p, b, j, m, v, y, x, g = e.history,
                    w = e.match.params,
                    C = w.currencyIdA,
                    k = w.currencyIdB,
                    T = null !== (n = ii(C)) && void 0 !== n ? n : void 0,
                    A = null !== (t = ii(k)) && void 0 !== t ? t : void 0,
                    N = Ue(),
                    S = N.account,
                    R = N.chainId,
                    _ = N.library,
                    P = Object(a.useMemo)((function() {
                        return [us(T, R), us(A, R)]
                    }), [T, A, R]),
                    B = Object(f.a)(P, 2),
                    M = B[0],
                    L = B[1],
                    D = Object(a.useContext)(l.ThemeContext),
                    z = Md(),
                    Y = z.independentField,
                    q = z.typedValue,
                    F = function(e, n) {
                        var t, r, a, i, o, c = Ue(),
                            s = c.account,
                            u = c.chainId,
                            l = Md(),
                            d = l.independentField,
                            p = l.typedValue,
                            b = Vs(e, n),
                            j = Object(f.a)(b, 2)[1],
                            m = si(null !== s && void 0 !== s ? s : void 0, [null === j || void 0 === j ? void 0 : j.liquidityToken]),
                            h = null === m || void 0 === m ? void 0 : m[null !== (t = null === j || void 0 === j || null === (r = j.liquidityToken) || void 0 === r ? void 0 : r.address) && void 0 !== t ? t : ""],
                            v = [us(e, u), us(n, u)],
                            y = v[0],
                            x = v[1],
                            g = (a = {}, Object(O.a)(a, Ud.CURRENCY_A, y), Object(O.a)(a, Ud.CURRENCY_B, x), Object(O.a)(a, Ud.LIQUIDITY, null === j || void 0 === j ? void 0 : j.liquidityToken), a),
                            w = cs(null === j || void 0 === j ? void 0 : j.liquidityToken),
                            C = j && w && h && y && U.f.greaterThanOrEqual(w.raw, h.raw) ? new U.m(y, j.getLiquidityValue(y, w, h, !1).raw) : void 0,
                            k = j && w && h && x && U.f.greaterThanOrEqual(w.raw, h.raw) ? new U.m(x, j.getLiquidityValue(x, w, h, !1).raw) : void 0,
                            T = (i = {}, Object(O.a)(i, Ud.CURRENCY_A, C), Object(O.a)(i, Ud.CURRENCY_B, k), i),
                            I = new U.h("0", "100");
                        if (d === Ud.LIQUIDITY_PERCENT) I = new U.h(p, "100");
                        else if (d === Ud.LIQUIDITY) {
                            if (null === j || void 0 === j ? void 0 : j.liquidityToken) {
                                var E = Lu(p, j.liquidityToken);
                                E && h && !E.greaterThan(h) && (I = new U.h(E.raw, h.raw))
                            }
                        } else if (g[d]) {
                            var A = Lu(p, g[d]),
                                N = T[d];
                            A && N && !A.greaterThan(N) && (I = new U.h(A.raw, N.raw))
                        }
                        var S, R, _ = (o = {}, Object(O.a)(o, Ud.LIQUIDITY_PERCENT, I), Object(O.a)(o, Ud.LIQUIDITY, h && I && I.greaterThan("0") ? new U.m(h.token, I.multiply(h.raw).quotient) : void 0), Object(O.a)(o, Ud.CURRENCY_A, y && I && I.greaterThan("0") && C ? new U.m(y, I.multiply(C.raw).quotient) : void 0), Object(O.a)(o, Ud.CURRENCY_B, x && I && I.greaterThan("0") && k ? new U.m(x, I.multiply(k.raw).quotient) : void 0), o);
                        return s || (S = "Connect Wallet"), _[Ud.LIQUIDITY] && _[Ud.CURRENCY_A] && _[Ud.CURRENCY_B] || (S = null !== (R = S) && void 0 !== R ? R : "Enter an amount"), {
                            pair: j,
                            parsedAmounts: _,
                            error: S
                        }
                    }(null !== T && void 0 !== T ? T : void 0, null !== A && void 0 !== A ? A : void 0),
                    V = F.pair,
                    W = F.parsedAmounts,
                    H = F.error,
                    Q = function() {
                        var e = Object(h.c)();
                        return {
                            onUserInput: Object(a.useCallback)((function(n, t) {
                                e(Bd({
                                    field: n,
                                    typedValue: t
                                }))
                            }), [e])
                        }
                    }().onUserInput,
                    G = !H,
                    K = Object(a.useState)(!1),
                    J = Object(f.a)(K, 2),
                    X = J[0],
                    Z = J[1],
                    $ = Object(a.useState)(!1),
                    ee = Object(f.a)($, 2),
                    ne = ee[0],
                    te = ee[1],
                    re = Object(a.useState)(!1),
                    ae = Object(f.a)(re, 2),
                    ie = ae[0],
                    oe = ae[1],
                    ue = Object(a.useState)(""),
                    le = Object(f.a)(ue, 2),
                    de = le[0],
                    pe = le[1],
                    be = Na(),
                    fe = Object(f.a)(be, 1)[0],
                    je = Aa(),
                    me = Object(f.a)(je, 1)[0],
                    he = (b = {}, Object(O.a)(b, Ud.LIQUIDITY_PERCENT, W[Ud.LIQUIDITY_PERCENT].equalTo("0") ? "0" : W[Ud.LIQUIDITY_PERCENT].lessThan(new U.h("1", "100")) ? "<1" : W[Ud.LIQUIDITY_PERCENT].toFixed(0)), Object(O.a)(b, Ud.LIQUIDITY, Y === Ud.LIQUIDITY ? q : null !== (i = null === (o = W[Ud.LIQUIDITY]) || void 0 === o ? void 0 : o.toSignificant(6)) && void 0 !== i ? i : ""), Object(O.a)(b, Ud.CURRENCY_A, Y === Ud.CURRENCY_A ? q : null !== (c = null === (u = W[Ud.CURRENCY_A]) || void 0 === u ? void 0 : u.toSignificant(6)) && void 0 !== c ? c : ""), Object(O.a)(b, Ud.CURRENCY_B, Y === Ud.CURRENCY_B ? q : null !== (d = null === (p = W[Ud.CURRENCY_B]) || void 0 === p ? void 0 : p.toSignificant(6)) && void 0 !== d ? d : ""), b),
                    ve = null === (j = W[Ud.LIQUIDITY_PERCENT]) || void 0 === j ? void 0 : j.equalTo(new U.h("1")),
                    ye = Ga(null === V || void 0 === V || null === (m = V.liquidityToken) || void 0 === m ? void 0 : m.address, Ma.a, x),
                    Oe = Object(a.useState)(null),
                    xe = Object(f.a)(Oe, 2),
                    ge = xe[0],
                    we = xe[1],
                    Ce = Nu(W[Ud.LIQUIDITY], se),
                    ke = Object(f.a)(Ce, 2),
                    Te = ke[0],
                    Ie = ke[1];

                function Ee() {
                    return (Ee = Object(E.a)(I.a.mark((function e() {
                        var n, t, r, a, i, o, c, s;
                        return I.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (ye && V && _) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new Error("missing dependencies");
                                case 2:
                                    if (n = W[Ud.LIQUIDITY]) {
                                        e.next = 5;
                                        break
                                    }
                                    throw new Error("missing liquidity amount");
                                case 5:
                                    return e.next = 7, ye.nonces(S);
                                case 7:
                                    t = e.sent, r = Math.ceil(Date.now() / 1e3) + fe, a = [{
                                        name: "name",
                                        type: "string"
                                    }, {
                                        name: "version",
                                        type: "string"
                                    }, {
                                        name: "chainId",
                                        type: "uint256"
                                    }, {
                                        name: "verifyingContract",
                                        type: "address"
                                    }], i = {
                                        name: "Pancake LPs",
                                        version: "1",
                                        chainId: R,
                                        verifyingContract: V.liquidityToken.address
                                    }, o = [{
                                        name: "owner",
                                        type: "address"
                                    }, {
                                        name: "spender",
                                        type: "address"
                                    }, {
                                        name: "value",
                                        type: "uint256"
                                    }, {
                                        name: "nonce",
                                        type: "uint256"
                                    }, {
                                        name: "deadline",
                                        type: "uint256"
                                    }], c = {
                                        owner: S,
                                        spender: se,
                                        value: n.raw.toString(),
                                        nonce: t.toHexString(),
                                        deadline: r
                                    }, s = JSON.stringify({
                                        types: {
                                            EIP712Domain: a,
                                            Permit: o
                                        },
                                        domain: i,
                                        primaryType: "Permit",
                                        message: c
                                    }), _.send("eth_signTypedData_v4", [S, s]).then(Ad.splitSignature).then((function(e) {
                                        we({
                                            v: e.v,
                                            r: e.r,
                                            s: e.s,
                                            deadline: r
                                        })
                                    })).catch((function(e) {
                                        4001 !== (null === e || void 0 === e ? void 0 : e.code) && Ie()
                                    }));
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                var Ae = Object(a.useCallback)((function(e, n) {
                        return we(null), Q(e, n)
                    }), [Q]),
                    Ne = Object(a.useCallback)((function(e) {
                        return Ae(Ud.LIQUIDITY, e)
                    }), [Ae]),
                    Se = Object(a.useCallback)((function(e) {
                        return Ae(Ud.CURRENCY_A, e)
                    }), [Ae]),
                    Re = Object(a.useCallback)((function(e) {
                        return Ae(Ud.CURRENCY_B, e)
                    }), [Ae]),
                    _e = hu();

                function Pe() {
                    return Be.apply(this, arguments)
                }

                function Be() {
                    return (Be = Object(E.a)(I.a.mark((function e() {
                        var n, t, r, a, i, o, c, s, u, l, d, p, b, f, j;
                        return I.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (R && _ && S) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new Error("missing dependencies");
                                case 2:
                                    if (t = W[Ud.CURRENCY_A], r = W[Ud.CURRENCY_B], t && r) {
                                        e.next = 5;
                                        break
                                    }
                                    throw new Error("missing currency amounts");
                                case 5:
                                    if (a = et(0, _, S), n = {}, Object(O.a)(n, Ud.CURRENCY_A, Zn(t, me)[0]), Object(O.a)(n, Ud.CURRENCY_B, Zn(r, me)[0]), i = n, T && A) {
                                        e.next = 9;
                                        break
                                    }
                                    throw new Error("missing tokens");
                                case 9:
                                    if (o = W[Ud.LIQUIDITY]) {
                                        e.next = 12;
                                        break
                                    }
                                    throw new Error("missing liquidity amount");
                                case 12:
                                    if (c = A === U.d, s = T === U.d || c, u = Math.ceil(Date.now() / 1e3) + fe, M && L) {
                                        e.next = 17;
                                        break
                                    }
                                    throw new Error("could not wrap");
                                case 17:
                                    if (Te !== xu.APPROVED) {
                                        e.next = 21;
                                        break
                                    }
                                    s ? (l = ["removeLiquidityETH", "removeLiquidityETHSupportingFeeOnTransferTokens"], d = [c ? M.address : L.address, o.raw.toString(), i[c ? Ud.CURRENCY_A : Ud.CURRENCY_B].toString(), i[c ? Ud.CURRENCY_B : Ud.CURRENCY_A].toString(), S, u]) : (l = ["removeLiquidity"], d = [M.address, L.address, o.raw.toString(), i[Ud.CURRENCY_A].toString(), i[Ud.CURRENCY_B].toString(), S, u]), e.next = 26;
                                    break;
                                case 21:
                                    if (null === ge) {
                                        e.next = 25;
                                        break
                                    }
                                    s ? (l = ["removeLiquidityETHWithPermit", "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"], d = [c ? M.address : L.address, o.raw.toString(), i[c ? Ud.CURRENCY_A : Ud.CURRENCY_B].toString(), i[c ? Ud.CURRENCY_B : Ud.CURRENCY_A].toString(), S, ge.deadline, !1, ge.v, ge.r, ge.s]) : (l = ["removeLiquidityWithPermit"], d = [M.address, L.address, o.raw.toString(), i[Ud.CURRENCY_A].toString(), i[Ud.CURRENCY_B].toString(), S, ge.deadline, !1, ge.v, ge.r, ge.s]), e.next = 26;
                                    break;
                                case 25:
                                    throw new Error("Attempting to confirm without approval or a signature. Please contact support.");
                                case 26:
                                    return e.next = 28, Promise.all(l.map((function(e, n) {
                                        var t;
                                        return (t = a.estimateGas)[e].apply(t, Object(ce.a)(d)).then(Xn).catch((function(t) {
                                            console.error("estimateGas failed", n, e, d, t)
                                        }))
                                    })));
                                case 28:
                                    if (p = e.sent, -1 !== (b = p.findIndex((function(e) {
                                            return Wn.a.isBigNumber(e)
                                        })))) {
                                        e.next = 34;
                                        break
                                    }
                                    console.error("This transaction would fail. Please contact support."), e.next = 39;
                                    break;
                                case 34:
                                    return f = l[b], j = p[b], oe(!0), e.next = 39, a[f].apply(a, Object(ce.a)(d).concat([{
                                        gasLimit: j
                                    }])).then((function(e) {
                                        var n, t;
                                        oe(!1), _e(e, {
                                            summary: "Remove ".concat(null === (n = W[Ud.CURRENCY_A]) || void 0 === n ? void 0 : n.toSignificant(3), " ").concat(null === T || void 0 === T ? void 0 : T.symbol, " and ").concat(null === (t = W[Ud.CURRENCY_B]) || void 0 === t ? void 0 : t.toSignificant(3), " ").concat(null === A || void 0 === A ? void 0 : A.symbol)
                                        }), pe(e.hash)
                                    })).catch((function(e) {
                                        oe(!1), console.error(e)
                                    }));
                                case 39:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function Me() {
                    var e, n;
                    return Object(r.jsxs)(Qe, {
                        gap: "md",
                        style: {
                            marginTop: "20px"
                        },
                        children: [Object(r.jsxs)(Un, {
                            align: "flex-end",
                            children: [Object(r.jsx)(s.v, {
                                fontSize: "24px",
                                children: null === (e = W[Ud.CURRENCY_A]) || void 0 === e ? void 0 : e.toSignificant(6)
                            }), Object(r.jsxs)(Bn, {
                                gap: "4px",
                                children: [Object(r.jsx)(ro, {
                                    currency: T,
                                    size: "24px"
                                }), Object(r.jsx)(s.v, {
                                    fontSize: "24px",
                                    style: {
                                        marginLeft: "10px"
                                    },
                                    children: null === T || void 0 === T ? void 0 : T.symbol
                                })]
                            })]
                        }), Object(r.jsx)(Bn, {
                            children: Object(r.jsx)(Nd.a, {
                                size: "16",
                                color: D.colors.textSubtle
                            })
                        }), Object(r.jsxs)(Un, {
                            align: "flex-end",
                            children: [Object(r.jsx)(s.v, {
                                fontSize: "24px",
                                children: null === (n = W[Ud.CURRENCY_B]) || void 0 === n ? void 0 : n.toSignificant(6)
                            }), Object(r.jsxs)(Bn, {
                                gap: "4px",
                                children: [Object(r.jsx)(ro, {
                                    currency: A,
                                    size: "24px"
                                }), Object(r.jsx)(s.v, {
                                    fontSize: "24px",
                                    style: {
                                        marginLeft: "10px"
                                    },
                                    children: null === A || void 0 === A ? void 0 : A.symbol
                                })]
                            })]
                        }), Object(r.jsx)(zd, {
                            fontSize: 12,
                            color: D.colors.textSubtle,
                            textAlign: "left",
                            padding: "12px 0 0 0",
                            children: "Output is estimated. If the price changes by more than ".concat(me / 100, "% your transaction will revert.")
                        })]
                    })
                }

                function Le() {
                    var e;
                    return Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsxs)(Un, {
                            children: [Object(r.jsxs)(s.v, {
                                color: "textSubtle",
                                children: ["LP ".concat(null === T || void 0 === T ? void 0 : T.symbol, "/").concat(null === A || void 0 === A ? void 0 : A.symbol), " Burned"]
                            }), Object(r.jsxs)(Bn, {
                                children: [Object(r.jsx)(Nc, {
                                    currency0: T,
                                    currency1: A,
                                    margin: !0
                                }), Object(r.jsx)(s.v, {
                                    children: null === (e = W[Ud.LIQUIDITY]) || void 0 === e ? void 0 : e.toSignificant(6)
                                })]
                            })]
                        }), V && Object(r.jsxs)(r.Fragment, {
                            children: [Object(r.jsxs)(Un, {
                                children: [Object(r.jsx)(s.v, {
                                    color: "textSubtle",
                                    children: "Price"
                                }), Object(r.jsxs)(s.v, {
                                    children: ["1 ", null === T || void 0 === T ? void 0 : T.symbol, " = ", M ? V.priceOf(M).toSignificant(6) : "-", " ", null === A || void 0 === A ? void 0 : A.symbol]
                                })]
                            }), Object(r.jsxs)(Un, {
                                children: [Object(r.jsx)("div", {}), Object(r.jsxs)(s.v, {
                                    children: ["1 ", null === A || void 0 === A ? void 0 : A.symbol, " = ", L ? V.priceOf(L).toSignificant(6) : "-", " ", null === T || void 0 === T ? void 0 : T.symbol]
                                })]
                            })]
                        }), Object(r.jsx)(s.c, {
                            disabled: !(Te === xu.APPROVED || null !== ge),
                            onClick: Pe,
                            children: "Confirm"
                        })]
                    })
                }
                var De = "Removing ".concat(null === (v = W[Ud.CURRENCY_A]) || void 0 === v ? void 0 : v.toSignificant(6), " ").concat(null === T || void 0 === T ? void 0 : T.symbol, " and ").concat(null === (y = W[Ud.CURRENCY_B]) || void 0 === y ? void 0 : y.toSignificant(6), " ").concat(null === A || void 0 === A ? void 0 : A.symbol),
                    ze = Object(a.useCallback)((function(e) {
                        Ae(Ud.LIQUIDITY_PERCENT, e.toString())
                    }), [Ae]),
                    Ye = T === U.d || A === U.d,
                    qe = Boolean(R && (T && Object(U.q)(U.p[R], T) || A && Object(U.q)(U.p[R], A))),
                    Fe = Object(a.useCallback)((function(e) {
                        k && ss(e) === k ? g.push("/remove/".concat(ss(e), "/").concat(C)) : g.push("/remove/".concat(ss(e), "/").concat(k))
                    }), [C, k, g]),
                    Ve = Object(a.useCallback)((function(e) {
                        C && ss(e) === C ? g.push("/remove/".concat(k, "/").concat(ss(e))) : g.push("/remove/".concat(C, "/").concat(ss(e)))
                    }), [C, k, g]),
                    We = Object(a.useCallback)((function() {
                        Z(!1), we(null), de && Ae(Ud.LIQUIDITY_PERCENT, "0"), pe("")
                    }), [Ae, de]),
                    Ge = function(e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
                            r = Object(a.useState)((function() {
                                return e
                            })),
                            i = Object(f.a)(r, 2),
                            o = i[0],
                            c = i[1],
                            s = Object(a.useRef)(),
                            u = Object(a.useCallback)((function(e) {
                                c(e), s.current && clearTimeout(s.current), s.current = setTimeout((function() {
                                    n(e), s.current = void 0
                                }), t)
                            }), [t, n]);
                        return Object(a.useEffect)((function() {
                            s.current && (clearTimeout(s.current), s.current = void 0), c(e)
                        }), [e]), [o, u]
                    }(Number.parseInt(W[Ud.LIQUIDITY_PERCENT].toFixed(0)), ze),
                    Ke = Object(f.a)(Ge, 2),
                    Je = Ke[0],
                    Xe = Ke[1];
                return Object(r.jsxs)(r.Fragment, {
                    children: [Object(r.jsxs)(el, {
                        children: [Object(r.jsx)(as, {
                            adding: !1
                        }), Object(r.jsxs)(il, {
                            children: [Object(r.jsx)(gr, {
                                isOpen: X,
                                onDismiss: We,
                                attemptingTxn: ie,
                                hash: de || "",
                                content: function() {
                                    return Object(r.jsx)(yr, {
                                        title: "You will receive",
                                        onDismiss: We,
                                        topContent: Me,
                                        bottomContent: Le
                                    })
                                },
                                pendingText: De
                            }), Object(r.jsxs)(Qe, {
                                gap: "md",
                                children: [Object(r.jsx)(qd, {
                                    children: Object(r.jsx)(Yd, {
                                        children: Object(r.jsxs)(Qe, {
                                            children: [Object(r.jsxs)(Un, {
                                                children: [Object(r.jsx)(s.v, {
                                                    children: "Amount"
                                                }), Object(r.jsx)(ol, {
                                                    onClick: function() {
                                                        te(!ne)
                                                    },
                                                    children: ne ? "Simple" : "Detailed"
                                                })]
                                            }), Object(r.jsx)(s.l, {
                                                justifyContent: "start",
                                                children: Object(r.jsxs)(s.v, {
                                                    fontSize: "64px",
                                                    children: [he[Ud.LIQUIDITY_PERCENT], "%"]
                                                })
                                            }), !ne && Object(r.jsxs)(r.Fragment, {
                                                children: [Object(r.jsx)(s.l, {
                                                    mb: "8px",
                                                    children: Object(r.jsx)(Pd, {
                                                        value: Je,
                                                        onChange: Xe
                                                    })
                                                }), Object(r.jsxs)(s.l, {
                                                    justifyContent: "space-around",
                                                    children: [Object(r.jsx)(s.c, {
                                                        variant: "tertiary",
                                                        size: "sm",
                                                        onClick: function() {
                                                            return Ae(Ud.LIQUIDITY_PERCENT, "25")
                                                        },
                                                        children: "25%"
                                                    }), Object(r.jsx)(s.c, {
                                                        variant: "tertiary",
                                                        size: "sm",
                                                        onClick: function() {
                                                            return Ae(Ud.LIQUIDITY_PERCENT, "50")
                                                        },
                                                        children: "50%"
                                                    }), Object(r.jsx)(s.c, {
                                                        variant: "tertiary",
                                                        size: "sm",
                                                        onClick: function() {
                                                            return Ae(Ud.LIQUIDITY_PERCENT, "75")
                                                        },
                                                        children: "75%"
                                                    }), Object(r.jsx)(s.c, {
                                                        variant: "tertiary",
                                                        size: "sm",
                                                        onClick: function() {
                                                            return Ae(Ud.LIQUIDITY_PERCENT, "100")
                                                        },
                                                        children: "Max"
                                                    })]
                                                })]
                                            })]
                                        })
                                    })
                                }), !ne && Object(r.jsxs)(r.Fragment, {
                                    children: [Object(r.jsx)(He, {
                                        children: Object(r.jsx)(Sd.a, {
                                            size: "16",
                                            color: D.colors.textSubtle
                                        })
                                    }), Object(r.jsx)(qd, {
                                        children: Object(r.jsx)(Yd, {
                                            children: Object(r.jsxs)(Qe, {
                                                gap: "10px",
                                                children: [Object(r.jsxs)(Un, {
                                                    children: [Object(r.jsx)(s.v, {
                                                        fontSize: "24px",
                                                        children: he[Ud.CURRENCY_A] || "-"
                                                    }), Object(r.jsxs)(Bn, {
                                                        children: [Object(r.jsx)(ro, {
                                                            currency: T,
                                                            style: {
                                                                marginRight: "12px"
                                                            }
                                                        }), Object(r.jsx)(s.v, {
                                                            fontSize: "24px",
                                                            id: "remove-liquidity-tokena-symbol",
                                                            children: null === T || void 0 === T ? void 0 : T.symbol
                                                        })]
                                                    })]
                                                }), Object(r.jsxs)(Un, {
                                                    children: [Object(r.jsx)(s.v, {
                                                        fontSize: "24px",
                                                        children: he[Ud.CURRENCY_B] || "-"
                                                    }), Object(r.jsxs)(Bn, {
                                                        children: [Object(r.jsx)(ro, {
                                                            currency: A,
                                                            style: {
                                                                marginRight: "12px"
                                                            }
                                                        }), Object(r.jsx)(s.v, {
                                                            fontSize: "24px",
                                                            id: "remove-liquidity-tokenb-symbol",
                                                            children: null === A || void 0 === A ? void 0 : A.symbol
                                                        })]
                                                    })]
                                                }), R && (qe || Ye) ? Object(r.jsx)(Un, {
                                                    style: {
                                                        justifyContent: "flex-end"
                                                    },
                                                    children: Ye ? Object(r.jsx)(hn, {
                                                        to: "/remove/".concat(T === U.d ? U.p[R].address : C, "/").concat(A === U.d ? U.p[R].address : k),
                                                        children: "Receive WBNB"
                                                    }) : qe ? Object(r.jsx)(hn, {
                                                        to: "/remove/".concat(T && Object(U.q)(T, U.p[R]) ? "ETH" : C, "/").concat(A && Object(U.q)(A, U.p[R]) ? "ETH" : k),
                                                        children: "Receive BNB"
                                                    }) : null
                                                }) : null]
                                            })
                                        })
                                    })]
                                }), Object(r.jsxs)(qd, {
                                    style: {
                                        paddingBottom: "24px"
                                    },
                                    children: [ne && Object(r.jsxs)(r.Fragment, {
                                        children: [Object(r.jsx)(Qc, {
                                            value: he[Ud.LIQUIDITY],
                                            onUserInput: Ne,
                                            onMax: function() {
                                                Ae(Ud.LIQUIDITY_PERCENT, "100")
                                            },
                                            showMaxButton: !ve,
                                            disableCurrencySelect: !0,
                                            currency: null === V || void 0 === V ? void 0 : V.liquidityToken,
                                            pair: V,
                                            id: "liquidity-amount"
                                        }), Object(r.jsx)(He, {
                                            children: Object(r.jsx)(Sd.a, {
                                                size: "16",
                                                color: D.colors.textSubtle
                                            })
                                        }), Object(r.jsx)(Qc, {
                                            hideBalance: !0,
                                            value: he[Ud.CURRENCY_A],
                                            onUserInput: Se,
                                            onMax: function() {
                                                return Ae(Ud.LIQUIDITY_PERCENT, "100")
                                            },
                                            showMaxButton: !ve,
                                            currency: T,
                                            label: "Output",
                                            onCurrencySelect: Fe,
                                            id: "remove-liquidity-tokena"
                                        }), Object(r.jsx)(He, {
                                            children: Object(r.jsx)(Nd.a, {
                                                size: "16",
                                                color: D.colors.textSubtle
                                            })
                                        }), Object(r.jsx)(Qc, {
                                            hideBalance: !0,
                                            value: he[Ud.CURRENCY_B],
                                            onUserInput: Re,
                                            onMax: function() {
                                                return Ae(Ud.LIQUIDITY_PERCENT, "100")
                                            },
                                            showMaxButton: !ve,
                                            currency: A,
                                            label: "Output",
                                            onCurrencySelect: Ve,
                                            id: "remove-liquidity-tokenb"
                                        })]
                                    }), V && Object(r.jsxs)("div", {
                                        style: {
                                            padding: "24px"
                                        },
                                        children: [Object(r.jsxs)(s.l, {
                                            justifyContent: "space-between",
                                            mb: "8px",
                                            children: ["Price:", Object(r.jsxs)("div", {
                                                children: ["1 ", null === T || void 0 === T ? void 0 : T.symbol, " = ", M ? V.priceOf(M).toSignificant(6) : "-", " ", null === A || void 0 === A ? void 0 : A.symbol]
                                            })]
                                        }), Object(r.jsxs)(s.l, {
                                            justifyContent: "space-between",
                                            children: [Object(r.jsx)("div", {}), Object(r.jsxs)("div", {
                                                children: ["1 ", null === A || void 0 === A ? void 0 : A.symbol, " = ", L ? V.priceOf(L).toSignificant(6) : "-", " ", null === T || void 0 === T ? void 0 : T.symbol]
                                            })]
                                        })]
                                    }), Object(r.jsx)("div", {
                                        style: {
                                            position: "relative"
                                        },
                                        children: S ? Object(r.jsxs)(Un, {
                                            children: [Object(r.jsx)(s.c, {
                                                onClick: function() {
                                                    return Ee.apply(this, arguments)
                                                },
                                                variant: Te === xu.APPROVED || null !== ge ? "success" : "primary",
                                                disabled: Te !== xu.NOT_APPROVED || null !== ge,
                                                mr: "8px",
                                                children: Te === xu.PENDING ? Object(r.jsx)(Ns, {
                                                    children: "Approving"
                                                }) : Te === xu.APPROVED || null !== ge ? "Approved" : "Approve"
                                            }), Object(r.jsx)(s.c, {
                                                onClick: function() {
                                                    Z(!0)
                                                },
                                                disabled: !G || null === ge && Te !== xu.APPROVED,
                                                variant: !G && W[Ud.CURRENCY_A] && W[Ud.CURRENCY_B] ? "danger" : "primary",
                                                children: H || "Remove"
                                            })]
                                        }) : Object(r.jsx)(Xu, {
                                            fullWidth: !0
                                        })
                                    })]
                                })]
                            })]
                        })]
                    }), V ? Object(r.jsx)(Qe, {
                        style: {
                            minWidth: "20rem",
                            marginTop: "1rem"
                        },
                        children: Object(r.jsx)(Ds, {
                            showUnwrapped: qe,
                            pair: V
                        })
                    }) : null]
                })
            }
            var Vd = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;

            function Wd(e) {
                var n = e.match.params.tokens;
                if (!Vd.test(n)) return Object(r.jsx)(m.a, {
                    to: "/pool"
                });
                var t = n.split("-"),
                    a = Object(f.a)(t, 2),
                    i = a[0],
                    o = a[1];
                return Object(r.jsx)(m.a, {
                    to: "/remove/".concat(i, "/").concat(o)
                })
            }

            function Hd() {
                var e = Object(u.a)(["\n  font-size: 1.25rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  width: 0;\n  background-color: ", ";\n  transition: color 300ms ", ";\n  color: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n  width: 100%;\n  ::placeholder {\n    color: ", ";\n  }\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"]);
                return Hd = function() {
                    return e
                }, e
            }

            function Qd() {
                var e = Object(u.a)(["\n  flex: 1;\n  padding: 1rem;\n"]);
                return Qd = function() {
                    return e
                }, e
            }

            function Gd() {
                var e = Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ", ";\n  transition: border-color 300ms ", ",\n    color 500ms ", ";\n  background-color: ", ";\n"]);
                return Gd = function() {
                    return e
                }, e
            }

            function Kd() {
                var e = Object(u.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ", ";\n  z-index: 1;\n  width: 100%;\n"]);
                return Kd = function() {
                    return e
                }, e
            }
            var Jd = Cn.black,
                Xd = l.default.div(Kd(), (function(e) {
                    return e.theme.colors.invertedContrast
                })),
                Zd = l.default.div(Gd(), (function(e) {
                    var n = e.error,
                        t = e.theme;
                    return n ? t.colors.failure : t.colors.invertedContrast
                }), (function(e) {
                    return e.error ? "step-end" : "step-start"
                }), (function(e) {
                    return e.error ? "step-end" : "step-start"
                }), (function(e) {
                    return e.theme.colors.invertedContrast
                })),
                $d = l.default.div(Qd()),
                ep = l.default.input(Hd(), (function(e) {
                    return e.theme.colors.invertedContrast
                }), (function(e) {
                    return e.error ? "step-end" : "step-start"
                }), (function(e) {
                    var n = e.error,
                        t = e.theme;
                    return n ? t.colors.failure : t.colors.primary
                }), (function(e) {
                    return e.theme.colors.textDisabled
                }), (function(e) {
                    return e.theme.colors.textDisabled
                }));

            function np(e) {
                var n = e.id,
                    t = e.value,
                    i = e.onChange,
                    o = Ue().chainId,
                    c = Object(a.useContext)(l.ThemeContext),
                    s = Pu(t),
                    u = s.address,
                    d = s.loading,
                    p = s.name,
                    b = Object(a.useCallback)((function(e) {
                        var n = e.target.value.replace(/\s+/g, "");
                        i(n)
                    }), [i]),
                    f = Boolean(t.length > 0 && !d && !u);
                return Object(r.jsx)(Xd, {
                    id: n,
                    children: Object(r.jsx)(Zd, {
                        error: f,
                        children: Object(r.jsx)($d, {
                            children: Object(r.jsxs)(Qe, {
                                gap: "md",
                                children: [Object(r.jsxs)(Un, {
                                    children: [Object(r.jsx)(Jd, {
                                        color: c.colors.textSubtle,
                                        fontWeight: 500,
                                        fontSize: 14,
                                        children: "Recipient"
                                    }), u && o && Object(r.jsx)(yn, {
                                        href: Kn(o, null !== p && void 0 !== p ? p : u, "address"),
                                        style: {
                                            fontSize: "14px"
                                        },
                                        children: "(View on bscscan)"
                                    })]
                                }), Object(r.jsx)(ep, {
                                    className: "recipient-address-input",
                                    type: "text",
                                    autoComplete: "off",
                                    autoCorrect: "off",
                                    autoCapitalize: "off",
                                    spellCheck: "false",
                                    placeholder: "Wallet Address or ENS name",
                                    error: f,
                                    pattern: "^(0x[a-fA-F0-9]{40})$",
                                    onChange: b,
                                    value: t
                                })]
                            })
                        })
                    })
                })
            }
            var tp = t(440);

            function rp(e) {
                var n = e.priceImpact;
                return Object(r.jsx)(Es, {
                    fontSize: "14px",
                    severity: Eu(n),
                    children: n ? n.lessThan(Ce) ? "<0.01%" : "".concat(n.toFixed(2), "%") : "-"
                })
            }

            function ap(e) {
                var n, t, i, o, c = e.trade,
                    u = e.onConfirm,
                    l = e.allowedSlippage,
                    d = e.swapErrorMessage,
                    p = e.disabledConfirm,
                    b = Object(a.useState)(!1),
                    j = Object(f.a)(b, 2),
                    m = j[0],
                    h = j[1],
                    v = Object(a.useMemo)((function() {
                        return Iu(c, l)
                    }), [l, c]),
                    y = Object(a.useMemo)((function() {
                        return Tu(c)
                    }), [c]),
                    O = y.priceImpactWithoutFee,
                    x = y.realizedLPFee,
                    g = Eu(O);
                return Object(r.jsxs)(r.Fragment, {
                    children: [Object(r.jsxs)(Qe, {
                        gap: "0px",
                        children: [Object(r.jsxs)(Un, {
                            align: "center",
                            children: [Object(r.jsx)(s.v, {
                                fontSize: "14px",
                                children: "Price"
                            }), Object(r.jsxs)(s.v, {
                                fontSize: "14px",
                                style: {
                                    justifyContent: "center",
                                    alignItems: "center",
                                    display: "flex",
                                    textAlign: "right",
                                    paddingLeft: "8px",
                                    fontWeight: 500
                                },
                                children: [Au(c, m), Object(r.jsx)(As, {
                                    onClick: function() {
                                        return h(!m)
                                    },
                                    children: Object(r.jsx)(tp.a, {
                                        size: 14
                                    })
                                })]
                            })]
                        }), Object(r.jsxs)(Un, {
                            children: [Object(r.jsxs)(Bn, {
                                children: [Object(r.jsx)(s.v, {
                                    fontSize: "14px",
                                    children: c.tradeType === U.o.EXACT_INPUT ? "Minimum received" : "Maximum sold"
                                }), Object(r.jsx)(Ki, {
                                    text: "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."
                                })]
                            }), Object(r.jsxs)(Bn, {
                                children: [Object(r.jsx)(s.v, {
                                    fontSize: "14px",
                                    children: c.tradeType === U.o.EXACT_INPUT ? null !== (n = null === (t = v[au.OUTPUT]) || void 0 === t ? void 0 : t.toSignificant(4)) && void 0 !== n ? n : "-" : null !== (i = null === (o = v[au.INPUT]) || void 0 === o ? void 0 : o.toSignificant(4)) && void 0 !== i ? i : "-"
                                }), Object(r.jsx)(s.v, {
                                    fontSize: "14px",
                                    marginLeft: "4px",
                                    children: c.tradeType === U.o.EXACT_INPUT ? c.outputAmount.currency.symbol : c.inputAmount.currency.symbol
                                })]
                            })]
                        }), Object(r.jsxs)(Un, {
                            children: [Object(r.jsxs)(Bn, {
                                children: [Object(r.jsx)(s.v, {
                                    fontSize: "14px",
                                    children: "Price Impact"
                                }), Object(r.jsx)(Ki, {
                                    text: "The difference between the market price and your price due to trade size."
                                })]
                            }), Object(r.jsx)(rp, {
                                priceImpact: O
                            })]
                        }), Object(r.jsxs)(Un, {
                            children: [Object(r.jsxs)(Bn, {
                                children: [Object(r.jsx)(s.v, {
                                    fontSize: "14px",
                                    children: "Liquidity Provider Fee"
                                }), Object(r.jsx)(Ki, {
                                    text: "For each trade a 0.2% fee is paid. 0.17% goes to liquidity providers and 0.03% goes to the PancakeSwap treasury."
                                })]
                            }), Object(r.jsx)(s.v, {
                                fontSize: "14px",
                                children: x ? "".concat(null === x || void 0 === x ? void 0 : x.toSignificant(6), " ").concat(c.inputAmount.currency.symbol) : "-"
                            })]
                        })]
                    }), Object(r.jsxs)(Pn, {
                        children: [Object(r.jsx)(s.c, {
                            onClick: u,
                            disabled: p,
                            variant: g > 2 ? "danger" : "primary",
                            mt: "10px",
                            id: "confirm-swap-or-send",
                            fullWidth: !0,
                            children: g > 2 ? "Swap Anyway" : "Confirm Swap"
                        }), d ? Object(r.jsx)(Us, {
                            error: d
                        }) : null]
                    })]
                })
            }

            function ip() {
                var e = Object(u.a)(["\n  font-style: italic;\n  line-height: 1.3;\n\n  span {\n    color: ", ";\n    font-weight: 600;\n  }\n"]);
                return ip = function() {
                    return e
                }, e
            }
            var op = Cn.main,
                cp = Object(l.default)(s.v)(ip(), (function(e) {
                    return e.theme.colors.primary
                }));

            function sp(e) {
                var n, t, i = e.trade,
                    o = e.allowedSlippage,
                    c = e.recipient,
                    u = e.showAcceptChanges,
                    d = e.onAcceptChanges,
                    p = Object(a.useMemo)((function() {
                        return Iu(i, o)
                    }), [i, o]),
                    b = Eu(Object(a.useMemo)((function() {
                        return Tu(i)
                    }), [i]).priceImpactWithoutFee),
                    f = Object(a.useContext)(l.ThemeContext);
                return Object(r.jsxs)(Qe, {
                    gap: "md",
                    style: {
                        marginTop: "20px"
                    },
                    children: [Object(r.jsxs)(Un, {
                        align: "flex-end",
                        children: [Object(r.jsxs)(Bn, {
                            gap: "0px",
                            children: [Object(r.jsx)(ro, {
                                currency: i.inputAmount.currency,
                                size: "24px",
                                style: {
                                    marginRight: "12px"
                                }
                            }), Object(r.jsx)(s.v, {
                                fontSize: "24px",
                                color: u && i.tradeType === U.o.EXACT_OUTPUT ? f.colors.primary : "text",
                                children: i.inputAmount.toSignificant(6)
                            })]
                        }), Object(r.jsx)(Bn, {
                            gap: "0px",
                            children: Object(r.jsx)(s.v, {
                                fontSize: "24px",
                                style: {
                                    marginLeft: "10px",
                                    fontWeight: 500
                                },
                                children: i.inputAmount.currency.symbol
                            })
                        })]
                    }), Object(r.jsx)(Bn, {
                        children: Object(r.jsx)(Sd.a, {
                            size: "16",
                            color: f.colors.textSubtle,
                            style: {
                                marginLeft: "4px",
                                minWidth: "16px"
                            }
                        })
                    }), Object(r.jsxs)(Un, {
                        align: "flex-end",
                        children: [Object(r.jsxs)(Bn, {
                            gap: "0px",
                            children: [Object(r.jsx)(ro, {
                                currency: i.outputAmount.currency,
                                size: "24px",
                                style: {
                                    marginRight: "12px"
                                }
                            }), Object(r.jsx)(s.v, {
                                fontSize: "24px",
                                style: {
                                    marginLeft: "10px",
                                    fontWeight: 500
                                },
                                color: b > 2 ? f.colors.failure : u && i.tradeType === U.o.EXACT_INPUT ? f.colors.primary : "text",
                                children: i.outputAmount.toSignificant(6)
                            })]
                        }), Object(r.jsx)(Bn, {
                            gap: "0px",
                            children: Object(r.jsx)(s.v, {
                                fontSize: "24px",
                                style: {
                                    marginLeft: "10px",
                                    fontWeight: 500
                                },
                                children: i.outputAmount.currency.symbol
                            })
                        })]
                    }), u ? Object(r.jsx)(_s, {
                        justify: "flex-start",
                        gap: "0px",
                        children: Object(r.jsxs)(Un, {
                            children: [Object(r.jsxs)(Bn, {
                                children: [Object(r.jsx)(Or.a, {
                                    size: 20,
                                    style: {
                                        marginRight: "8px",
                                        minWidth: 24
                                    }
                                }), Object(r.jsx)(op, {
                                    color: f.colors.primary,
                                    children: " Price Updated"
                                })]
                            }), Object(r.jsx)(s.c, {
                                onClick: d,
                                children: "Accept"
                            })]
                        })
                    }) : null, Object(r.jsx)(Qe, {
                        justify: "flex-start",
                        gap: "sm",
                        style: {
                            padding: "16px 0 0"
                        },
                        children: i.tradeType === U.o.EXACT_INPUT ? Object(r.jsxs)(cp, {
                            children: ["Output is estimated. You will receive at least ", Object(r.jsxs)("span", {
                                children: [null === (n = p[au.OUTPUT]) || void 0 === n ? void 0 : n.toSignificant(6), " ", i.outputAmount.currency.symbol]
                            }), " or the transaction will revert."]
                        }) : Object(r.jsxs)(cp, {
                            children: ["Input is estimated. You will sell at most ", Object(r.jsxs)("span", {
                                children: [null === (t = p[au.INPUT]) || void 0 === t ? void 0 : t.toSignificant(6), " ", i.inputAmount.currency.symbol]
                            }), " or the transaction will revert."]
                        })
                    }), null !== c ? Object(r.jsx)(Qe, {
                        justify: "flex-start",
                        gap: "sm",
                        style: {
                            padding: "16px 0 0"
                        },
                        children: Object(r.jsxs)(op, {
                            children: ["Output will be sent to", " ", Object(r.jsx)("b", {
                                title: c,
                                children: Qn(c) ? Jn(c) : c
                            })]
                        })
                    }) : null]
                })
            }

            function up(e) {
                var n, t, i, o, c, s, u = e.trade,
                    l = e.originalTrade,
                    d = e.onAcceptChanges,
                    p = e.allowedSlippage,
                    b = e.onConfirm,
                    f = e.onDismiss,
                    j = e.recipient,
                    m = e.swapErrorMessage,
                    h = e.isOpen,
                    v = e.attemptingTxn,
                    y = e.txHash,
                    O = Object(a.useMemo)((function() {
                        return Boolean(u && l && (n = l, (e = u).tradeType !== n.tradeType || !Object(U.q)(e.inputAmount.currency, n.inputAmount.currency) || !e.inputAmount.equalTo(n.inputAmount) || !Object(U.q)(e.outputAmount.currency, n.outputAmount.currency) || !e.outputAmount.equalTo(n.outputAmount)));
                        var e, n
                    }), [l, u]),
                    x = Object(a.useCallback)((function() {
                        return u ? Object(r.jsx)(sp, {
                            trade: u,
                            allowedSlippage: p,
                            recipient: j,
                            showAcceptChanges: O,
                            onAcceptChanges: d
                        }) : null
                    }), [p, d, j, O, u]),
                    g = Object(a.useCallback)((function() {
                        return u ? Object(r.jsx)(ap, {
                            onConfirm: b,
                            trade: u,
                            disabledConfirm: O,
                            swapErrorMessage: m,
                            allowedSlippage: p
                        }) : null
                    }), [p, b, O, m, u]),
                    w = "Swapping ".concat(null === u || void 0 === u || null === (n = u.inputAmount) || void 0 === n ? void 0 : n.toSignificant(6), " ").concat(null === u || void 0 === u || null === (t = u.inputAmount) || void 0 === t || null === (i = t.currency) || void 0 === i ? void 0 : i.symbol, " for ").concat(null === u || void 0 === u || null === (o = u.outputAmount) || void 0 === o ? void 0 : o.toSignificant(6), " ").concat(null === u || void 0 === u || null === (c = u.outputAmount) || void 0 === c || null === (s = c.currency) || void 0 === s ? void 0 : s.symbol),
                    C = Object(a.useCallback)((function() {
                        return m ? Object(r.jsx)(xr, {
                            onDismiss: f,
                            message: m
                        }) : Object(r.jsx)(yr, {
                            title: "Confirm Swap",
                            onDismiss: f,
                            topContent: x,
                            bottomContent: g
                        })
                    }), [f, g, x, m]);
                return Object(r.jsx)(gr, {
                    isOpen: h,
                    onDismiss: f,
                    attemptingTxn: v,
                    hash: y,
                    content: C,
                    pendingText: w
                })
            }
            var lp = t(441),
                dp = Cn.black,
                pp = Object(a.memo)((function(e) {
                    var n = e.trade,
                        t = Object(a.useContext)(l.ThemeContext);
                    return Object(r.jsx)(s.l, {
                        px: "1rem",
                        py: "0.5rem",
                        my: "0.5rem",
                        style: {
                            border: "1px solid ".concat(t.colors.tertiary),
                            borderRadius: "1rem"
                        },
                        flexWrap: "wrap",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        children: n.route.path.map((function(e, n, i) {
                            var o = n === i.length - 1;
                            return Object(r.jsxs)(a.Fragment, {
                                children: [Object(r.jsxs)(s.l, {
                                    my: "0.5rem",
                                    alignItems: "center",
                                    style: {
                                        flexShrink: 0
                                    },
                                    children: [Object(r.jsx)(ro, {
                                        currency: e,
                                        size: "1.5rem"
                                    }), Object(r.jsx)(dp, {
                                        fontSize: 14,
                                        color: t.colors.text,
                                        ml: "0.5rem",
                                        children: e.symbol
                                    })]
                                }), o ? null : Object(r.jsx)(lp.a, {
                                    color: t.colors.textSubtle
                                })]
                            }, n)
                        }))
                    })
                }));

            function bp(e) {
                var n, t, a, i, o = e.trade,
                    c = e.allowedSlippage,
                    u = Tu(o),
                    l = u.priceImpactWithoutFee,
                    d = u.realizedLPFee,
                    p = o.tradeType === U.o.EXACT_INPUT,
                    b = Iu(o, c);
                return Object(r.jsx)(s.f, {
                    children: Object(r.jsxs)(s.g, {
                        children: [Object(r.jsxs)(Un, {
                            children: [Object(r.jsxs)(Bn, {
                                children: [Object(r.jsx)(s.v, {
                                    fontSize: "14px",
                                    children: p ? "Minimum received" : "Maximum sold"
                                }), Object(r.jsx)(Ki, {
                                    text: "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."
                                })]
                            }), Object(r.jsx)(Bn, {
                                children: Object(r.jsx)(s.v, {
                                    fontSize: "14px",
                                    children: p ? null !== (n = "".concat(null === (t = b[au.OUTPUT]) || void 0 === t ? void 0 : t.toSignificant(4), " ").concat(o.outputAmount.currency.symbol)) && void 0 !== n ? n : "-" : null !== (a = "".concat(null === (i = b[au.INPUT]) || void 0 === i ? void 0 : i.toSignificant(4), " ").concat(o.inputAmount.currency.symbol)) && void 0 !== a ? a : "-"
                                })
                            })]
                        }), Object(r.jsxs)(Un, {
                            children: [Object(r.jsxs)(Bn, {
                                children: [Object(r.jsx)(s.v, {
                                    fontSize: "14px",
                                    children: "Price Impact"
                                }), Object(r.jsx)(Ki, {
                                    text: "The difference between the market price and estimated price due to trade size."
                                })]
                            }), Object(r.jsx)(rp, {
                                priceImpact: l
                            })]
                        }), Object(r.jsxs)(Un, {
                            children: [Object(r.jsxs)(Bn, {
                                children: [Object(r.jsx)(s.v, {
                                    fontSize: "14px",
                                    children: "Liquidity Provider Fee"
                                }), Object(r.jsx)(Ki, {
                                    text: "For each trade a 0.2% fee is paid. 0.17% goes to liquidity providers and 0.03% goes to the PancakeSwap treasury."
                                })]
                            }), Object(r.jsx)(s.v, {
                                fontSize: "14px",
                                children: d ? "".concat(d.toSignificant(4), " ").concat(o.inputAmount.currency.symbol) : "-"
                            })]
                        })]
                    })
                })
            }

            function fp(e) {
                var n = e.trade,
                    t = Aa(),
                    a = Object(f.a)(t, 1)[0],
                    i = Boolean(n && n.route.path.length > 2);
                return Object(r.jsx)(Qe, {
                    gap: "md",
                    children: n && Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsx)(bp, {
                            trade: n,
                            allowedSlippage: a
                        }), i && Object(r.jsxs)(r.Fragment, {
                            children: [Object(r.jsx)(Ts, {}), Object(r.jsxs)(Qe, {
                                style: {
                                    padding: "0 24px"
                                },
                                children: [Object(r.jsxs)(Bn, {
                                    children: [Object(r.jsx)(s.v, {
                                        fontSize: "14px",
                                        children: "Route"
                                    }), Object(r.jsx)(Ki, {
                                        text: "Routing through these tokens resulted in the best price for your trade."
                                    })]
                                }), Object(r.jsx)(pp, {
                                    trade: n
                                })]
                            })]
                        })]
                    })
                })
            }

            function jp() {
                var e = Object(u.a)(["\n  padding-top: calc(16px + 2rem);\n  padding-bottom: 20px;\n  margin-top: -2rem;\n  width: 100%;\n  max-width: 400px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  color: ", ";\n  z-index: 1;\n\n  transform: ", ";\n  transition: transform 300ms ease-in-out;\n"]);
                return jp = function() {
                    return e
                }, e
            }
            var mp = l.default.div(jp(), (function(e) {
                return e.theme.colors.textSubtle
            }), (function(e) {
                return e.show ? "translateY(0%)" : "translateY(-100%)"
            }));

            function hp(e) {
                var n, t = e.trade,
                    a = Object(rn.a)(e, ["trade"]),
                    i = pi(t, bi);
                return Object(r.jsx)(mp, {
                    show: Boolean(t),
                    children: Object(r.jsx)(fp, Object(V.a)(Object(V.a)({}, a), {}, {
                        trade: null !== (n = null !== t && void 0 !== t ? t : i) && void 0 !== n ? n : void 0
                    }))
                })
            }

            function vp(e) {
                var n = e.version,
                    t = Object(m.g)(),
                    i = Ks(),
                    o = Object(a.useMemo)((function() {
                        return Object(V.a)(Object(V.a)({}, t), {}, {
                            search: "?".concat(Object(Gs.stringify)(Object(V.a)(Object(V.a)({}, i), {}, {
                                use: n !== Js ? n : void 0
                            })))
                        })
                    }), [t, i, n]);
                return Object(r.jsx)(Ft, {
                    style: {
                        marginTop: "12px",
                        padding: "8px 4px"
                    },
                    children: Object(r.jsx)(Qe, {
                        gap: "sm",
                        justify: "center",
                        style: {
                            alignItems: "center",
                            textAlign: "center"
                        },
                        children: Object(r.jsxs)(s.v, {
                            style: {
                                lineHeight: "145.23%"
                            },
                            fontSize: "14px",
                            children: ["There is a better price for this trade on", " ", Object(r.jsx)(hn, {
                                to: o,
                                children: Object(r.jsxs)("b", {
                                    children: ["Uniswap ", n.toUpperCase(), " \u2197"]
                                })
                            })]
                        })
                    })
                })
            }

            function yp(e) {
                var n, t, a, i, o, c = e.price,
                    u = e.showInverted,
                    l = e.setShowInverted,
                    d = u ? null === c || void 0 === c ? void 0 : c.toSignificant(6) : null === c || void 0 === c || null === (n = c.invert()) || void 0 === n ? void 0 : n.toSignificant(6),
                    p = Boolean((null === c || void 0 === c ? void 0 : c.baseCurrency) && (null === c || void 0 === c ? void 0 : c.quoteCurrency)),
                    b = u ? "".concat(null === c || void 0 === c || null === (t = c.quoteCurrency) || void 0 === t ? void 0 : t.symbol, " per ").concat(null === c || void 0 === c || null === (a = c.baseCurrency) || void 0 === a ? void 0 : a.symbol) : "".concat(null === c || void 0 === c || null === (i = c.baseCurrency) || void 0 === i ? void 0 : i.symbol, " per ").concat(null === c || void 0 === c || null === (o = c.quoteCurrency) || void 0 === o ? void 0 : o.symbol);
                return Object(r.jsx)(s.v, {
                    fontSize: "14px",
                    style: {
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex"
                    },
                    children: p ? Object(r.jsxs)(r.Fragment, {
                        children: [null !== d && void 0 !== d ? d : "-", " ", b, Object(r.jsx)(As, {
                            onClick: function() {
                                return l(!u)
                            },
                            children: Object(r.jsx)(s.u, {
                                width: "20px",
                                color: "primary"
                            })
                        })]
                    }) : "-"
                })
            }

            function Op() {
                var e = Object(u.a)(["\n  stroke: ", ";\n"]);
                return Op = function() {
                    return e
                }, e
            }

            function xp() {
                var e = Object(u.a)(["\n  max-width: 420px;\n  width: 100%;\n  padding: 1rem;\n  background: rgba(242, 150, 2, 0.05);\n  border: 1px solid #f3841e;\n  border-radius: 20px;\n  overflow: auto;\n"]);
                return xp = function() {
                    return e
                }, e
            }

            function gp() {
                var e = Object(u.a)(["\n  background: ", ";\n  padding: 0.75rem;\n  border-radius: 20px;\n"]);
                return gp = function() {
                    return e
                }, e
            }
            var wp = Cn.main,
                Cp = Cn.blue,
                kp = l.default.div(gp(), (function(e) {
                    var n = e.theme;
                    return Object(an.b)(.6, n.colors.tertiary)
                })),
                Tp = l.default.div(xp()),
                Ip = Object(l.default)(Or.a)(Op(), (function(e) {
                    return e.theme.colors.failure
                }));

            function Ep(e) {
                var n, t, i, o, c = e.token,
                    s = Ue().chainId,
                    u = null !== (n = null === c || void 0 === c || null === (t = c.symbol) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== n ? n : "",
                    l = null !== (i = null === c || void 0 === c || null === (o = c.name) || void 0 === o ? void 0 : o.toLowerCase()) && void 0 !== i ? i : "",
                    d = ni(),
                    p = Object(a.useMemo)((function() {
                        return !(!c || !s) && Object.keys(d).some((function(e) {
                            var n, t, r = d[e];
                            return !r.equals(c) && ((null === (n = r.symbol) || void 0 === n ? void 0 : n.toLowerCase()) === u || (null === (t = r.name) || void 0 === t ? void 0 : t.toLowerCase()) === l)
                        }))
                    }), [c, s, d, u, l]);
                return c ? Object(r.jsx)(kp, {
                    error: p,
                    children: Object(r.jsxs)(Pn, {
                        gap: "6px",
                        children: [Object(r.jsxs)(Qe, {
                            gap: "24px",
                            children: [Object(r.jsx)(ro, {
                                currency: c,
                                size: "16px"
                            }), Object(r.jsx)("div", {
                                children: " "
                            })]
                        }), Object(r.jsxs)(Qe, {
                            gap: "10px",
                            justify: "flex-start",
                            children: [Object(r.jsxs)(wp, {
                                children: [c && c.name && c.symbol && c.name !== c.symbol ? "".concat(c.name, " (").concat(c.symbol, ")") : c.name || c.symbol, " "]
                            }), s && Object(r.jsx)(yn, {
                                style: {
                                    fontWeight: 400
                                },
                                href: Kn(s, c.address, "token"),
                                children: Object(r.jsxs)(Cp, {
                                    title: c.address,
                                    children: [Jn(c.address), " (View on BscScan)"]
                                })
                            })]
                        })]
                    })
                }) : null
            }

            function Ap(e) {
                var n = e.isOpen,
                    t = e.tokens,
                    i = e.onConfirm,
                    o = Object(a.useState)(!1),
                    c = Object(f.a)(o, 2),
                    u = c[0],
                    l = c[1],
                    d = Object(a.useCallback)((function() {
                        return l((function(e) {
                            return !e
                        }))
                    }), []),
                    p = Object(a.useCallback)((function() {
                        return null
                    }), []);
                return Object(r.jsx)(er, {
                    isOpen: n,
                    onDismiss: p,
                    maxHeight: 90,
                    children: Object(r.jsx)(Tp, {
                        className: "token-warning-container",
                        children: Object(r.jsxs)(Qe, {
                            gap: "lg",
                            children: [Object(r.jsxs)(Pn, {
                                gap: "6px",
                                children: [Object(r.jsx)(Ip, {}), Object(r.jsx)(s.v, {
                                    color: "failure",
                                    children: "Token imported"
                                })]
                            }), Object(r.jsxs)(s.v, {
                                children: ["Anyone can create an BEP20 token on BSC with ", Object(r.jsx)("em", {
                                    children: "any"
                                }), " name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token."]
                            }), Object(r.jsx)(s.v, {
                                children: "This interface can load arbitrary tokens by token addresses. Please take extra caution and do your research when interacting with arbitrary BEP20 tokens."
                            }), Object(r.jsxs)(s.v, {
                                children: ["If you purchase an arbitrary token, ", Object(r.jsx)("strong", {
                                    children: "you may be unable to sell it back."
                                })]
                            }), t.map((function(e) {
                                return Object(r.jsx)(Ep, {
                                    token: e
                                }, e.address)
                            })), Object(r.jsxs)(Un, {
                                children: [Object(r.jsx)("div", {
                                    children: Object(r.jsxs)("label", {
                                        htmlFor: "understand-checkbox",
                                        style: {
                                            cursor: "pointer",
                                            userSelect: "none"
                                        },
                                        children: [Object(r.jsx)("input", {
                                            id: "understand-checkbox",
                                            type: "checkbox",
                                            className: "understand-checkbox",
                                            checked: u,
                                            onChange: d
                                        }), " ", Object(r.jsx)(s.v, {
                                            as: "span",
                                            ml: "4px",
                                            children: "I understand"
                                        })]
                                    })
                                }), Object(r.jsx)(s.c, {
                                    disabled: !u,
                                    variant: "danger",
                                    style: {
                                        width: "140px"
                                    },
                                    className: "token-dismiss-button",
                                    onClick: function() {
                                        i()
                                    },
                                    children: "Continue"
                                })]
                            })]
                        })
                    })
                })
            }

            function Np() {
                var e = Object(u.a)(["\n  stroke: ", ";\n"]);
                return Np = function() {
                    return e
                }, e
            }

            function Sp() {
                var e = Object(u.a)(["\n  max-width: 420px;\n  width: 100%;\n  padding: 1rem;\n  background: rgba(242, 150, 2, 0.05);\n  border: 1px solid #f3841e;\n  border-radius: 20px;\n  overflow: auto;\n"]);
                return Sp = function() {
                    return e
                }, e
            }
            var Rp = Cn.main,
                Up = Cn.body,
                _p = l.default.div(Sp()),
                Pp = Object(l.default)(Or.a)(Np(), (function(e) {
                    return e.theme.colors.failure
                }));

            function Bp(e) {
                var n = e.isOpen,
                    t = e.transactionType,
                    i = e.onConfirm,
                    o = Object(a.useState)(!1),
                    c = Object(f.a)(o, 2),
                    u = c[0],
                    l = c[1],
                    d = Object(a.useCallback)((function() {
                        return l((function(e) {
                            return !e
                        }))
                    }), []),
                    p = Object(a.useCallback)((function() {
                        return null
                    }), []);
                return Object(r.jsx)(er, {
                    isOpen: n,
                    onDismiss: p,
                    maxHeight: 90,
                    children: Object(r.jsx)(_p, {
                        className: "token-warning-container",
                        children: Object(r.jsxs)(Qe, {
                            gap: "lg",
                            children: [Object(r.jsxs)(Pn, {
                                gap: "6px",
                                children: [Object(r.jsx)(Pp, {}), Object(r.jsx)(Rp, {
                                    color: "failure",
                                    children: "Syrup Warning"
                                })]
                            }), "" !== t && Object(r.jsxs)(r.Fragment, {
                                children: [Object(r.jsxs)(Up, {
                                    color: "failure",
                                    children: ["Please be careful when ", Object(r.jsx)("strong", {
                                        children: t
                                    }), " SYRUP."]
                                }), Object(r.jsx)(Up, {
                                    color: "failure",
                                    children: "Buying" === t ? "You will not receive CAKE rewards for holding purchased SYRUP." : "You will need to buy back the same amount of SYRUP to be able to convert back to CAKE."
                                })]
                            }), Object(r.jsxs)(Un, {
                                children: [Object(r.jsx)("div", {
                                    children: Object(r.jsxs)("label", {
                                        htmlFor: "understand-checkbox",
                                        style: {
                                            cursor: "pointer",
                                            userSelect: "none"
                                        },
                                        children: [Object(r.jsx)("input", {
                                            id: "understand-checkbox",
                                            type: "checkbox",
                                            className: "understand-checkbox",
                                            checked: u,
                                            onChange: d
                                        }), " ", Object(r.jsx)(s.v, {
                                            as: "span",
                                            children: "I understand"
                                        })]
                                    })
                                }), Object(r.jsx)(s.c, {
                                    disabled: !u,
                                    variant: "danger",
                                    style: {
                                        width: "140px"
                                    },
                                    onClick: function() {
                                        l(!1), i()
                                    },
                                    children: "Continue"
                                })]
                            })]
                        })
                    })
                })
            }

            function Mp() {
                var e = Object(u.a)(["\n  width: 100%;\n  height: 2px;\n  background-color: ;\n  background: linear-gradient(\n    90deg,\n    ", " 0%,\n    ", " 80%\n  );\n  opacity: 0.6;\n"]);
                return Mp = function() {
                    return e
                }, e
            }

            function Lp() {
                var e = Object(u.a)(["\n  width: calc(100% - 20px);\n  display: flex;\n  align-items: center;\n"]);
                return Lp = function() {
                    return e
                }, e
            }

            function Dp() {
                var e = Object(u.a)(["\n  min-width: 20px;\n  min-height: 20px;\n  background-color: ", ";\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 8px;\n  font-size: 12px;\n  color: ", ";\n"]);
                return Dp = function() {
                    return e
                }, e
            }

            function zp() {
                var e = Object(u.a)(["\n  width: 50%;\n"]);
                return zp = function() {
                    return e
                }, e
            }

            function Yp() {
                var e = Object(u.a)(["\n  margin-top: 1.25rem;\n"]);
                return Yp = function() {
                    return e
                }, e
            }
            var qp, Fp, Vp = Object(l.default)(Qe)(Yp()),
                Wp = Object(l.default)(Un)(zp()),
                Hp = l.default.div(Dp(), (function(e) {
                    var n = e.theme,
                        t = e.confirmed;
                    return e.disabled ? n.colors.backgroundDisabled : t ? n.colors.success : n.colors.primary
                }), (function(e) {
                    var n = e.theme,
                        t = e.confirmed;
                    return e.disabled ? n.colors.text : t ? n.colors.success : "#FFFFFF"
                })),
                Qp = l.default.div(Lp()),
                Gp = l.default.div(Mp(), (function(e) {
                    var n = e.theme,
                        t = e.prevConfirmed;
                    return Object(an.b)(.5, t ? n.colors.success : n.colors.primary)
                }), (function(e) {
                    var n = e.theme;
                    return e.prevConfirmed ? n.colors.primary : n.colors.backgroundDisabled
                }));

            function Kp(e) {
                var n = e.steps;
                return Object(r.jsx)(Vp, {
                    justify: "center",
                    children: Object(r.jsxs)(Wp, {
                        children: [n.map((function(e, t) {
                            return Object(r.jsxs)(Qp, {
                                children: [Object(r.jsx)(Hp, {
                                    confirmed: e,
                                    disabled: !n[t - 1] && 0 !== t,
                                    children: e ? "\u2713" : t + 1
                                }), Object(r.jsx)(Gp, {
                                    prevConfirmed: e
                                })]
                            }, t)
                        })), Object(r.jsx)(Hp, {
                            disabled: !n[n.length - 1],
                            children: n.length + 1
                        })]
                    })
                })
            }

            function Jp(e) {
                return "0x".concat(e.raw.toString(16))
            }

            function Xp(e, n) {
                if (tu(e) !== Qs.v1) throw new Error("invalid trade version");
                if (e.route.pairs.length > 2) throw new Error("too many pairs");
                var t = e.tradeType === U.o.EXACT_INPUT,
                    r = e.inputAmount.currency === U.d,
                    a = e.outputAmount.currency === U.d;
                if (r && a) throw new Error("ETHER to ETHER");
                var i, o = Jp(e.minimumAmountOut(n.allowedSlippage)),
                    c = Jp(e.maximumAmountIn(n.allowedSlippage)),
                    s = (i = n.ttl, "0x".concat((Math.floor((new Date).getTime() / 1e3) + i).toString(16)));
                if (t) {
                    if (r) return {
                        methodName: "ethToTokenTransferInput",
                        args: [o, s, n.recipient],
                        value: c
                    };
                    if (a) return {
                        methodName: "tokenToEthTransferInput",
                        args: [c, o, s, n.recipient],
                        value: "0x0"
                    };
                    var u = e.outputAmount.currency;
                    if (!(u instanceof U.l)) throw new Error("token to token");
                    return {
                        methodName: "tokenToTokenTransferInput",
                        args: [c, o, "0x1", s, n.recipient, u.address],
                        value: "0x0"
                    }
                }
                if (r) return {
                    methodName: "ethToTokenTransferOutput",
                    args: [o, s, n.recipient],
                    value: c
                };
                if (a) return {
                    methodName: "tokenToEthTransferOutput",
                    args: [o, c, s, n.recipient],
                    value: "0x0"
                };
                var l = e.outputAmount.currency;
                if (!(l instanceof U.l)) throw new Error("invalid output amount currency");
                return {
                    methodName: "tokenToTokenTransferOutput",
                    args: [o, c, Ws.a.toHexString(), s, n.recipient, l.address],
                    value: "0x0"
                }
            }

            function Zp(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ge,
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : we,
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    i = Ue(),
                    o = i.account,
                    c = i.chainId,
                    s = i.library,
                    u = Pu(r),
                    l = u.address,
                    d = null === r ? o : l,
                    p = Ja(ru(e), !0);
                return Object(a.useMemo)((function() {
                    var r = tu(e);
                    if (!e || !d || !s || !o || !r || !c) return [];
                    var a = r === Qs.v2 ? et(0, s, o) : p;
                    if (!a) return [];
                    var i = [];
                    switch (r) {
                        case Qs.v2:
                            i.push(U.k.swapCallParameters(e, {
                                feeOnTransfer: !1,
                                allowedSlippage: new U.h(U.f.BigInt(n), ke),
                                recipient: d,
                                ttl: t
                            })), e.tradeType === U.o.EXACT_INPUT && i.push(U.k.swapCallParameters(e, {
                                feeOnTransfer: !0,
                                allowedSlippage: new U.h(U.f.BigInt(n), ke),
                                recipient: d,
                                ttl: t
                            }));
                            break;
                        case Qs.v1:
                            i.push(Xp(e, {
                                allowedSlippage: new U.h(U.f.BigInt(n), ke),
                                recipient: d,
                                ttl: t
                            }))
                    }
                    return i.map((function(e) {
                        return {
                            parameters: e,
                            contract: a
                        }
                    }))
                }), [o, n, c, t, s, d, e, p])
            }! function(e) {
                e[e.INVALID = 0] = "INVALID", e[e.LOADING = 1] = "LOADING", e[e.VALID = 2] = "VALID"
            }(qp || (qp = {})),
            function(e) {
                e[e.NOT_APPLICABLE = 0] = "NOT_APPLICABLE", e[e.WRAP = 1] = "WRAP", e[e.UNWRAP = 2] = "UNWRAP"
            }(Fp || (Fp = {}));
            var $p = {
                wrapType: Fp.NOT_APPLICABLE
            };

            function eb(e, n, t) {
                var r = Ue(),
                    i = r.chainId,
                    o = r.account,
                    c = function(e) {
                        var n = Ue().chainId;
                        return Ga(n ? U.p[n].address : void 0, qa, e)
                    }(),
                    s = di(null !== o && void 0 !== o ? o : void 0, e),
                    u = Object(a.useMemo)((function() {
                        return Lu(t, e)
                    }), [e, t]),
                    l = hu();
                return Object(a.useMemo)((function() {
                    if (!c || !i || !e || !n) return $p;
                    var t = u && s && !s.lessThan(u);
                    return e === U.d && Object(U.q)(U.p[i], n) ? {
                        wrapType: Fp.WRAP,
                        execute: t && u ? Object(E.a)(I.a.mark((function e() {
                            var n;
                            return I.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, c.deposit({
                                            value: "0x".concat(u.raw.toString(16))
                                        });
                                    case 3:
                                        n = e.sent, l(n, {
                                            summary: "Wrap ".concat(u.toSignificant(6), " BNB to WBNB")
                                        }), e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0), console.error("Could not deposit", e.t0);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7]
                            ])
                        }))) : void 0,
                        inputError: t ? void 0 : "Insufficient ETH balance"
                    } : Object(U.q)(U.p[i], e) && n === U.d ? {
                        wrapType: Fp.UNWRAP,
                        execute: t && u ? Object(E.a)(I.a.mark((function e() {
                            var n;
                            return I.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, c.withdraw("0x".concat(u.raw.toString(16)));
                                    case 3:
                                        n = e.sent, l(n, {
                                            summary: "Unwrap ".concat(u.toSignificant(6), " WBNB to BNB")
                                        }), e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0), console.error("Could not withdraw", e.t0);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7]
                            ])
                        }))) : void 0,
                        inputError: t ? void 0 : "Insufficient WBNB balance"
                    } : $p
                }), [c, i, e, n, u, s, l])
            }
            var nb = Cn.main,
                tb = function() {
                    var e, n, t, i, o, c, u, d, p, b, j, m = function() {
                            var e = Ue().chainId,
                                n = Object(h.c)(),
                                t = Ks(),
                                r = Object(a.useState)(),
                                i = Object(f.a)(r, 2),
                                o = i[0],
                                c = i[1];
                            return Object(a.useEffect)((function() {
                                if (e) {
                                    var r = Wu(t);
                                    n(du({
                                        typedValue: r.typedValue,
                                        field: r.independentField,
                                        inputCurrencyId: r[au.INPUT].currencyId,
                                        outputCurrencyId: r[au.OUTPUT].currencyId,
                                        recipient: r.recipient
                                    })), c({
                                        inputCurrencyId: r[au.INPUT].currencyId,
                                        outputCurrencyId: r[au.OUTPUT].currencyId
                                    })
                                }
                            }), [n, e]), o
                        }(),
                        v = [ii(null === m || void 0 === m ? void 0 : m.inputCurrencyId), ii(null === m || void 0 === m ? void 0 : m.outputCurrencyId)],
                        y = v[0],
                        x = v[1],
                        g = Object(a.useState)(!1),
                        w = Object(f.a)(g, 2),
                        C = w[0],
                        k = w[1],
                        T = Object(a.useState)(!1),
                        A = Object(f.a)(T, 2),
                        N = A[0],
                        S = A[1],
                        R = Object(a.useState)(""),
                        _ = Object(f.a)(R, 2),
                        P = _[0],
                        B = _[1],
                        M = Object(a.useMemo)((function() {
                            var e, n;
                            return null !== (e = null === (n = [y, x]) || void 0 === n ? void 0 : n.filter((function(e) {
                                return e instanceof U.l
                            }))) && void 0 !== e ? e : []
                        }), [y, x]),
                        L = Object(a.useCallback)((function() {
                            k(!0)
                        }), []),
                        D = Object(a.useCallback)((function() {
                            S(!1), B("")
                        }), []),
                        z = Ue().account,
                        Y = Object(a.useContext)(l.ThemeContext),
                        q = function() {
                            var e = Object(h.c)(),
                                n = Ea(),
                                t = Object(a.useCallback)((function() {
                                    e(ma({
                                        userExpertMode: !n
                                    }))
                                }), [n, e]);
                            return [n, t]
                        }(),
                        F = Object(f.a)(q, 1)[0],
                        W = Na(),
                        H = Object(f.a)(W, 1)[0],
                        Q = Aa(),
                        G = Object(f.a)(Q, 1)[0],
                        K = Mu(),
                        J = K.independentField,
                        X = K.typedValue,
                        Z = K.recipient,
                        $ = Yu(),
                        ee = $.v1Trade,
                        ne = $.v2Trade,
                        te = $.currencyBalances,
                        re = $.parsedAmount,
                        ae = $.currencies,
                        ie = $.inputError,
                        oe = eb(ae[au.INPUT], ae[au.OUTPUT], X),
                        ue = oe.wrapType,
                        le = oe.execute,
                        de = oe.inputError,
                        pe = ue !== Fp.NOT_APPLICABLE,
                        be = Xs(),
                        fe = pe ? void 0 : (e = {}, Object(O.a)(e, Qs.v1, ee), Object(O.a)(e, Qs.v2, ne), e)[be],
                        je = be === Qs.v2 && cu(ne, ee, Re) ? Qs.v1 : be === Qs.v1 && cu(ee, ne) ? Qs.v2 : void 0,
                        me = pe ? (n = {}, Object(O.a)(n, au.INPUT, re), Object(O.a)(n, au.OUTPUT, re), n) : (t = {}, Object(O.a)(t, au.INPUT, J === au.INPUT ? re : null === fe || void 0 === fe ? void 0 : fe.inputAmount), Object(O.a)(t, au.OUTPUT, J === au.OUTPUT ? re : null === fe || void 0 === fe ? void 0 : fe.outputAmount), t),
                        he = function() {
                            var e = Object(h.c)(),
                                n = Object(a.useCallback)((function(n, t) {
                                    e(su({
                                        field: n,
                                        currencyId: t instanceof U.l ? t.address : t === U.d ? "ETH" : ""
                                    }))
                                }), [e]);
                            return {
                                onSwitchTokens: Object(a.useCallback)((function() {
                                    e(uu())
                                }), [e]),
                                onCurrencySelection: n,
                                onUserInput: Object(a.useCallback)((function(n, t) {
                                    e(lu({
                                        field: n,
                                        typedValue: t
                                    }))
                                }), [e]),
                                onChangeRecipient: Object(a.useCallback)((function(n) {
                                    e(pu({
                                        recipient: n
                                    }))
                                }), [e])
                            }
                        }(),
                        ve = he.onSwitchTokens,
                        ye = he.onCurrencySelection,
                        Oe = he.onUserInput,
                        xe = he.onChangeRecipient,
                        Ce = !ie,
                        ke = J === au.INPUT ? au.OUTPUT : au.INPUT,
                        Te = Object(a.useCallback)((function(e) {
                            Oe(au.INPUT, e)
                        }), [Oe]),
                        Ie = Object(a.useCallback)((function(e) {
                            Oe(au.OUTPUT, e)
                        }), [Oe]),
                        Ne = Object(a.useState)({
                            showConfirm: !1,
                            tradeToConfirm: void 0,
                            attemptingTxn: !1,
                            swapErrorMessage: void 0,
                            txHash: void 0
                        }),
                        Se = Object(f.a)(Ne, 2),
                        _e = Se[0],
                        Pe = _e.showConfirm,
                        Be = _e.tradeToConfirm,
                        Me = _e.swapErrorMessage,
                        Le = _e.attemptingTxn,
                        De = _e.txHash,
                        ze = Se[1],
                        Ye = (d = {}, Object(O.a)(d, J, X), Object(O.a)(d, ke, pe ? null !== (i = null === (o = me[J]) || void 0 === o ? void 0 : o.toExact()) && void 0 !== i ? i : "" : null !== (c = null === (u = me[ke]) || void 0 === u ? void 0 : u.toSignificant(6)) && void 0 !== c ? c : ""), d),
                        qe = null === fe || void 0 === fe ? void 0 : fe.route,
                        Fe = Boolean(ae[au.INPUT] && ae[au.OUTPUT] && (null === (p = me[J]) || void 0 === p ? void 0 : p.greaterThan(U.f.BigInt(0)))),
                        Ve = !qe,
                        We = function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                t = Object(a.useMemo)((function() {
                                    return e ? Iu(e, n)[au.INPUT] : void 0
                                }), [e, n]),
                                r = tu(e) === Qs.v1,
                                i = ru(e);
                            return Nu(t, r ? i : se)
                        }(fe, G),
                        He = Object(f.a)(We, 2),
                        Ge = He[0],
                        Ke = He[1],
                        Je = Object(a.useState)(!1),
                        Xe = Object(f.a)(Je, 2),
                        Ze = Xe[0],
                        $e = Xe[1];
                    Object(a.useEffect)((function() {
                        Ge === xu.PENDING && $e(!0)
                    }), [Ge, Ze]);
                    var en = Gu(te[au.INPUT]),
                        nn = Boolean(en && (null === (b = me[au.INPUT]) || void 0 === b ? void 0 : b.equalTo(en))),
                        tn = function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ge,
                                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : we,
                                r = arguments.length > 3 ? arguments[3] : void 0,
                                i = Ue(),
                                o = i.account,
                                c = i.chainId,
                                s = i.library,
                                u = Zp(e, n, t, r),
                                l = hu(),
                                d = Pu(r).address,
                                p = null === r ? o : d;
                            return Object(a.useMemo)((function() {
                                if (!e || !s || !o || !c) return {
                                    state: qp.INVALID,
                                    callback: null,
                                    error: "Missing dependencies"
                                };
                                if (!p) return null !== r ? {
                                    state: qp.INVALID,
                                    callback: null,
                                    error: "Invalid recipient"
                                } : {
                                    state: qp.LOADING,
                                    callback: null,
                                    error: null
                                };
                                var n = tu(e);
                                return {
                                    state: qp.VALID,
                                    callback: function() {
                                        var t = Object(E.a)(I.a.mark((function t() {
                                            var a, i, c, s, d, b, f, j, m, h;
                                            return I.a.wrap((function(t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.next = 2, Promise.all(u.map((function(e) {
                                                            var n, t = e.parameters,
                                                                r = t.methodName,
                                                                a = t.args,
                                                                i = t.value,
                                                                o = e.contract,
                                                                c = !i || ki(i) ? {} : {
                                                                    value: i
                                                                };
                                                            return (n = o.estimateGas)[r].apply(n, Object(ce.a)(a).concat([c])).then((function(n) {
                                                                return {
                                                                    call: e,
                                                                    gasEstimate: n
                                                                }
                                                            })).catch((function(n) {
                                                                var t;
                                                                return console.info("Gas estimate failed, trying eth_call to extract error", e), (t = o.callStatic)[r].apply(t, Object(ce.a)(a).concat([c])).then((function(t) {
                                                                    return console.info("Unexpected successful call after failed estimate gas", e, n, t), {
                                                                        call: e,
                                                                        error: new Error("Unexpected issue with estimating the gas. Please try again.")
                                                                    }
                                                                })).catch((function(n) {
                                                                    var t;
                                                                    switch (console.info("Call threw error", e, n), n.reason) {
                                                                        case "UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT":
                                                                        case "UniswapV2Router: EXCESSIVE_INPUT_AMOUNT":
                                                                            t = "This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.";
                                                                            break;
                                                                        default:
                                                                            t = "The transaction cannot succeed due to error: ".concat(n.reason, ". This is probably an issue with one of the tokens you are swapping.")
                                                                    }
                                                                    return {
                                                                        call: e,
                                                                        error: new Error(t)
                                                                    }
                                                                }))
                                                            }))
                                                        })));
                                                    case 2:
                                                        if (a = t.sent, i = a.find((function(e, n, t) {
                                                                return "gasEstimate" in e && (n === t.length - 1 || "gasEstimate" in t[n + 1])
                                                            }))) {
                                                            t.next = 9;
                                                            break
                                                        }
                                                        if (!((c = a.filter((function(e) {
                                                                return "error" in e
                                                            }))).length > 0)) {
                                                            t.next = 8;
                                                            break
                                                        }
                                                        throw c[c.length - 1].error;
                                                    case 8:
                                                        throw new Error("Unexpected error. Please contact support: none of the calls threw an error");
                                                    case 9:
                                                        return s = i.call, d = s.contract, b = s.parameters, f = b.methodName, j = b.args, m = b.value, h = i.gasEstimate, t.abrupt("return", d[f].apply(d, Object(ce.a)(j).concat([Object(V.a)({
                                                            gasLimit: Xn(h)
                                                        }, m && !ki(m) ? {
                                                            value: m,
                                                            from: o
                                                        } : {
                                                            from: o
                                                        })])).then((function(t) {
                                                            var a = e.inputAmount.currency.symbol,
                                                                i = e.outputAmount.currency.symbol,
                                                                c = e.inputAmount.toSignificant(3),
                                                                s = e.outputAmount.toSignificant(3),
                                                                u = "Swap ".concat(c, " ").concat(a, " for ").concat(s, " ").concat(i),
                                                                d = p === o ? u : "".concat(u, " to ").concat(r && Qn(r) ? Jn(r) : r),
                                                                b = n === Qs.v2 ? d : "".concat(d, " on ").concat(n.toUpperCase());
                                                            return l(t, {
                                                                summary: b
                                                            }), t.hash
                                                        })).catch((function(e) {
                                                            throw 4001 === (null === e || void 0 === e ? void 0 : e.code) ? new Error("Transaction rejected.") : (console.error("Swap failed", e, f, j, m), new Error("Swap failed: ".concat(e.message)))
                                                        })));
                                                    case 11:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }), t)
                                        })));
                                        return function() {
                                            return t.apply(this, arguments)
                                        }
                                    }(),
                                    error: null
                                }
                            }), [e, s, o, c, p, r, u, l])
                        }(fe, G, H, Z),
                        rn = tn.callback,
                        an = tn.error,
                        on = Tu(fe).priceImpactWithoutFee,
                        cn = Object(a.useCallback)((function() {
                            on && ! function(e) {
                                return e.lessThan(Ae) ? !!e.lessThan(Ee) || window.confirm("This swap has a price impact of at least ".concat(Ee.toFixed(0), "%. Please confirm that you would like to continue with this swap.")) : "confirm" === window.prompt("This swap has a price impact of at least ".concat(Ae.toFixed(0), '%. Please type the word "confirm" to continue with this swap.'))
                            }(on) || rn && (ze((function(e) {
                                return Object(V.a)(Object(V.a)({}, e), {}, {
                                    attemptingTxn: !0,
                                    swapErrorMessage: void 0,
                                    txHash: void 0
                                })
                            })), rn().then((function(e) {
                                ze((function(n) {
                                    return Object(V.a)(Object(V.a)({}, n), {}, {
                                        attemptingTxn: !1,
                                        swapErrorMessage: void 0,
                                        txHash: e
                                    })
                                }))
                            })).catch((function(e) {
                                ze((function(n) {
                                    return Object(V.a)(Object(V.a)({}, n), {}, {
                                        attemptingTxn: !1,
                                        swapErrorMessage: e.message,
                                        txHash: void 0
                                    })
                                }))
                            })))
                        }), [on, rn, ze]),
                        sn = Object(a.useState)(!1),
                        un = Object(f.a)(sn, 2),
                        ln = un[0],
                        dn = un[1],
                        pn = Eu(on),
                        bn = !ie && (Ge === xu.NOT_APPROVED || Ge === xu.PENDING || Ze && Ge === xu.APPROVED) && !(pn > 3 && !F),
                        fn = Object(a.useCallback)((function() {
                            ze((function(e) {
                                return Object(V.a)(Object(V.a)({}, e), {}, {
                                    showConfirm: !1
                                })
                            })), De && Oe(au.INPUT, "")
                        }), [Oe, De, ze]),
                        jn = Object(a.useCallback)((function() {
                            ze((function(e) {
                                return Object(V.a)(Object(V.a)({}, e), {}, {
                                    tradeToConfirm: fe
                                })
                            }))
                        }), [fe]),
                        hn = Object(a.useCallback)((function(e, n) {
                            "syrup" === e && (S(!0), B(n))
                        }), [S, B]),
                        vn = Object(a.useCallback)((function(e) {
                            $e(!1), ye(au.INPUT, e), "syrup" === e.symbol.toLowerCase() && hn(e.symbol.toLowerCase(), "Selling")
                        }), [ye, $e, hn]),
                        yn = Object(a.useCallback)((function() {
                            en && Oe(au.INPUT, en.toExact())
                        }), [en, Oe]),
                        On = Object(a.useCallback)((function(e) {
                            ye(au.OUTPUT, e), "syrup" === e.symbol.toLowerCase() && hn(e.symbol.toLowerCase(), "Buying")
                        }), [ye, hn]);
                    return Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsx)(Ap, {
                            isOpen: M.length > 0 && !C,
                            tokens: M,
                            onConfirm: L
                        }), Object(r.jsx)(Bp, {
                            isOpen: N,
                            transactionType: P,
                            onConfirm: D
                        }), Object(r.jsx)(Ur, {}), Object(r.jsx)(el, {
                            children: Object(r.jsxs)(Cs, {
                                id: "swap-page",
                                children: [Object(r.jsx)(up, {
                                    isOpen: Pe,
                                    trade: fe,
                                    originalTrade: Be,
                                    onAcceptChanges: jn,
                                    attemptingTxn: Le,
                                    txHash: De,
                                    recipient: Z,
                                    allowedSlippage: G,
                                    onConfirm: cn,
                                    swapErrorMessage: Me,
                                    onDismiss: fn
                                }), Object(r.jsx)(kd, {
                                    title: "Exchange",
                                    description: "Trade tokens in an instant"
                                }), Object(r.jsxs)(s.g, {
                                    children: [Object(r.jsxs)(Qe, {
                                        gap: "md",
                                        children: [Object(r.jsx)(Qc, {
                                            label: J === au.OUTPUT && !pe && fe ? "From (estimated)" : Ir(76, "From"),
                                            value: Ye[au.INPUT],
                                            showMaxButton: !nn,
                                            currency: ae[au.INPUT],
                                            onUserInput: Te,
                                            onMax: yn,
                                            onCurrencySelect: vn,
                                            otherCurrency: ae[au.OUTPUT],
                                            id: "swap-currency-input"
                                        }), Object(r.jsx)(Qe, {
                                            justify: "space-between",
                                            children: Object(r.jsxs)(Pn, {
                                                justify: F ? "space-between" : "center",
                                                style: {
                                                    padding: "0 1rem"
                                                },
                                                children: [Object(r.jsx)(ks, {
                                                    clickable: !0,
                                                    children: Object(r.jsx)(s.n, {
                                                        variant: "tertiary",
                                                        onClick: function() {
                                                            $e(!1), ve()
                                                        },
                                                        style: {
                                                            borderRadius: "50%"
                                                        },
                                                        size: "sm",
                                                        children: Object(r.jsx)(s.b, {
                                                            color: "primary",
                                                            width: "24px"
                                                        })
                                                    })
                                                }), null === Z && !pe && F ? Object(r.jsx)(mn, {
                                                    id: "add-recipient-button",
                                                    onClick: function() {
                                                        return xe("")
                                                    },
                                                    children: "+ Add a send (optional)"
                                                }) : null]
                                            })
                                        }), Object(r.jsx)(Qc, {
                                            value: Ye[au.OUTPUT],
                                            onUserInput: Ie,
                                            label: J === au.INPUT && !pe && fe ? "To (estimated)" : Ir(80, "To"),
                                            showMaxButton: !1,
                                            currency: ae[au.OUTPUT],
                                            onCurrencySelect: On,
                                            otherCurrency: ae[au.INPUT],
                                            id: "swap-currency-output"
                                        }), null === Z || pe ? null : Object(r.jsxs)(r.Fragment, {
                                            children: [Object(r.jsxs)(Pn, {
                                                justify: "space-between",
                                                style: {
                                                    padding: "0 1rem"
                                                },
                                                children: [Object(r.jsx)(ks, {
                                                    clickable: !1,
                                                    children: Object(r.jsx)(Sd.a, {
                                                        size: "16",
                                                        color: Y.colors.textSubtle
                                                    })
                                                }), Object(r.jsx)(mn, {
                                                    id: "remove-recipient-button",
                                                    onClick: function() {
                                                        return xe(null)
                                                    },
                                                    children: "- Remove send"
                                                })]
                                            }), Object(r.jsx)(np, {
                                                id: "recipient",
                                                value: Z,
                                                onChange: xe
                                            })]
                                        }), pe ? null : Object(r.jsx)(zt, {
                                            padding: ".25rem .75rem 0 .75rem",
                                            borderRadius: "20px",
                                            children: Object(r.jsxs)(Qe, {
                                                gap: "4px",
                                                children: [Boolean(fe) && Object(r.jsxs)(Un, {
                                                    align: "center",
                                                    children: [Object(r.jsx)(s.v, {
                                                        fontSize: "14px",
                                                        children: "Price"
                                                    }), Object(r.jsx)(yp, {
                                                        price: null === fe || void 0 === fe ? void 0 : fe.executionPrice,
                                                        showInverted: ln,
                                                        setShowInverted: dn
                                                    })]
                                                }), G !== ge && Object(r.jsxs)(Un, {
                                                    align: "center",
                                                    children: [Object(r.jsx)(s.v, {
                                                        fontSize: "14px",
                                                        children: "Slippage Tolerance"
                                                    }), Object(r.jsxs)(s.v, {
                                                        fontSize: "14px",
                                                        children: [G / 100, "%"]
                                                    })]
                                                })]
                                            })
                                        })]
                                    }), Object(r.jsxs)(Is, {
                                        children: [z ? pe ? Object(r.jsx)(s.c, {
                                            disabled: Boolean(de),
                                            onClick: le,
                                            fullWidth: !0,
                                            children: null !== de && void 0 !== de ? de : ue === Fp.WRAP ? "Wrap" : ue === Fp.UNWRAP ? "Unwrap" : null
                                        }) : Ve && Fe ? Object(r.jsx)(qt, {
                                            style: {
                                                textAlign: "center"
                                            },
                                            children: Object(r.jsx)(nb, {
                                                mb: "4px",
                                                children: "Insufficient liquidity for this trade."
                                            })
                                        }) : bn ? Object(r.jsxs)(Un, {
                                            children: [Object(r.jsx)(s.c, {
                                                onClick: Ke,
                                                disabled: Ge !== xu.NOT_APPROVED || Ze,
                                                style: {
                                                    width: "48%"
                                                },
                                                variant: Ge === xu.APPROVED ? "success" : "primary",
                                                children: Ge === xu.PENDING ? Object(r.jsxs)(Pn, {
                                                    gap: "6px",
                                                    justify: "center",
                                                    children: ["Approving ", Object(r.jsx)(Tt, {
                                                        stroke: "white"
                                                    })]
                                                }) : Ze && Ge === xu.APPROVED ? "Approved" : "Approve ".concat(null === (j = ae[au.INPUT]) || void 0 === j ? void 0 : j.symbol)
                                            }), Object(r.jsx)(s.c, {
                                                onClick: function() {
                                                    F ? cn() : ze({
                                                        tradeToConfirm: fe,
                                                        attemptingTxn: !1,
                                                        swapErrorMessage: void 0,
                                                        showConfirm: !0,
                                                        txHash: void 0
                                                    })
                                                },
                                                style: {
                                                    width: "48%"
                                                },
                                                id: "swap-button",
                                                disabled: !Ce || Ge !== xu.APPROVED || pn > 3 && !F,
                                                variant: Ce && pn > 2 ? "danger" : "primary",
                                                children: pn > 3 && !F ? "Price Impact High" : "Swap".concat(pn > 2 ? " Anyway" : "")
                                            })]
                                        }) : Object(r.jsx)(s.c, {
                                            onClick: function() {
                                                F ? cn() : ze({
                                                    tradeToConfirm: fe,
                                                    attemptingTxn: !1,
                                                    swapErrorMessage: void 0,
                                                    showConfirm: !0,
                                                    txHash: void 0
                                                })
                                            },
                                            id: "swap-button",
                                            disabled: !Ce || pn > 3 && !F || !!an,
                                            variant: Ce && pn > 2 && !an ? "danger" : "primary",
                                            fullWidth: !0,
                                            children: ie || (pn > 3 && !F ? "Price Impact Too High" : "Swap".concat(pn > 2 ? " Anyway" : ""))
                                        }) : Object(r.jsx)(Xu, {
                                            fullWidth: !0
                                        }), bn && Object(r.jsx)(Kp, {
                                            steps: [Ge === xu.APPROVED]
                                        }), F && Me ? Object(r.jsx)(Us, {
                                            error: Me
                                        }) : null, je && Object(r.jsx)(vp, {
                                            version: je
                                        })]
                                    })]
                                })]
                            })
                        }), Object(r.jsx)(hp, {
                            trade: fe
                        })]
                    })
                };

            function rb(e) {
                var n = e.location;
                return Object(r.jsx)(m.a, {
                    to: Object(V.a)(Object(V.a)({}, n), {}, {
                        pathname: "/swap"
                    })
                })
            }

            function ab(e) {
                var n = e.location.search,
                    t = e.match.params.outputCurrency,
                    a = e.location;
                return Object(r.jsx)(m.a, {
                    to: Object(V.a)(Object(V.a)({}, a), {}, {
                        pathname: "/swap",
                        search: n && n.length > 1 ? "".concat(n, "&outputCurrency=").concat(t) : "?outputCurrency=".concat(t)
                    })
                })
            }
            var ib = {
                    selectedLanguage: {
                        code: "",
                        language: ""
                    },
                    setSelectedLanguage: function() {},
                    translatedLanguage: {
                        code: "",
                        language: ""
                    },
                    setTranslatedLanguage: function() {}
                },
                ob = Object(a.createContext)(ib),
                cb = [{
                    code: "en",
                    language: "English"
                }],
                sb = "IS_DARK",
                ub = i.a.createContext({
                    isDark: !1,
                    toggleTheme: function() {
                        return null
                    }
                }),
                lb = function(e) {
                    var n = e.children,
                        t = Object(a.useState)((function() {
                            var e = localStorage.getItem(sb);
                            return !!e && JSON.parse(e)
                        })),
                        i = Object(f.a)(t, 2),
                        o = i[0],
                        c = i[1],
                        u = Object(a.useCallback)((function(e) {
                            if (e && e.data && "string" === typeof e.data && e.data.startsWith("[iFrameSizer]message:")) {
                                var n = e.data.substring("[iFrameSizer]message:".length),
                                    t = JSON.parse(n);
                                console.log("data.isDark", t.isDark), c((function() {
                                    return t.isDark
                                }))
                            }
                        }), []);
                    Object(a.useEffect)((function() {
                        return window.addEventListener("message", u),
                            function() {
                                window.removeEventListener("message", u)
                            }
                    }), [u]);
                    return Object(r.jsx)(ub.Provider, {
                        value: {
                            isDark: o,
                            toggleTheme: function() {
                                c((function(e) {
                                    return localStorage.setItem(sb, JSON.stringify(!e)), !e
                                }))
                            }
                        },
                        children: Object(r.jsx)(l.ThemeProvider, {
                            theme: o ? s.w : s.x,
                            children: n
                        })
                    })
                },
                db = function() {
                    var e = Object(a.useContext)(ub);
                    return {
                        isDark: e.isDark,
                        toggleTheme: e.toggleTheme,
                        theme: Object(a.useContext)(l.ThemeContext)
                    }
                },
                pb = t(174),
                bb = t.n(pb),
                fb = {
                    cakeAddress: "0x380624a4a7e69db1ca07deecf764025fc224d056",
                    busdAddress: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
                    lpAddress: "0xc760f87e4bd0aac44fb0b90833836e2e9051e506"
                },
                jb = function() {
                    var e = Object(a.useState)(0),
                        n = Object(f.a)(e, 2),
                        t = n[0],
                        r = n[1],
                        i = ei();
                    return Object(a.useEffect)((function() {
                        (function() {
                            var e = Object(E.a)(I.a.mark((function e() {
                                var n, t, a, o, c, s, u, l, d, p, b, j, m;
                                return I.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (e.prev = 0, !i) {
                                                e.next = 15;
                                                break
                                            }
                                            return n = fb.busdAddress, t = fb.lpAddress, a = [
                                                [fb.cakeAddress, Lr.encodeFunctionData("balanceOf", [t])],
                                                [n, Lr.encodeFunctionData("balanceOf", [t])]
                                            ], e.next = 6, i.aggregate(a);
                                        case 6:
                                            o = e.sent, c = Object(f.a)(o, 2), c[0], s = c[1], u = s.map((function(e) {
                                                return Lr.decodeFunctionResult("balanceOf", e)
                                            })), l = Object(f.a)(u, 2), d = l[0], p = l[1], b = new bb.a(d), j = new bb.a(p), m = j.div(b).toNumber(), r(m);
                                        case 15:
                                            e.next = 20;
                                            break;
                                        case 17:
                                            e.prev = 17, e.t0 = e.catch(0), console.error("Unable to fetch price data:", e.t0);
                                        case 20:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 17]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        })()()
                    }), [i]), t
                },
                mb = [{
                    label: "Home",
                    icon: "HomeIcon",
                    href: "http://cubdefi.com/"
                }, {
                    label: "Trade",
                    icon: "TradeIcon",
                    items: [{
                        label: "Exchange",
                        href: "https://exchange.cubdefi.com/"
                    }, {
                        label: "Liquidity",
                        href: "https://exchange.cubdefi.com/#/pool"
                    }]
                }, {
                    label: "Farms",
                    icon: "FarmIcon",
                    href: "https://cubdefi.com/farms"
                }],
                hb = function(e) {
                    var n = Object(v.c)(),
                        t = n.account,
                        i = n.activate,
                        o = n.deactivate,
                        c = Object(a.useContext)(ob),
                        u = c.selectedLanguage,
                        l = c.setSelectedLanguage,
                        d = db(),
                        p = d.isDark,
                        b = d.toggleTheme,
                        f = jb();
                    return Object(r.jsx)(s.q, Object(V.a)({
                        links: mb,
                        priceLink: "https://www.coingecko.com/en/coins/wrapped-leo",
                        account: t,
                        login: function(e) {
                            return i("walletconnect" === e ? oe : "bsc" === e ? ie : ae)
                        },
                        logout: o,
                        isDark: p,
                        toggleTheme: b,
                        currentLang: (null === u || void 0 === u ? void 0 : u.code) || "",
                        langs: cb,
                        setLang: l,
                        cakePriceUsd: f
                    }, e))
                };

            function vb() {
                var e = Object(u.a)(["\n  margin-top: 5rem;\n"]);
                return vb = function() {
                    return e
                }, e
            }

            function yb() {
                var e = Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 32px 16px;\n  min-height: calc(100vh - 152px);\n  align-items: center;\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 1;\n\n  background-image: url('/static/media/bg.bfd323f2.png');\n  background-repeat: no-repeat;\n  background-position: top;\n  background-size: contain;\n"]);
                return yb = function() {
                    return e
                }, e
            }

            function Ob() {
                var e = Object(u.a)(["\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  overflow-x: hidden;\n"]);
                return Ob = function() {
                    return e
                }, e
            }
            var xb = l.default.div(Ob()),
                gb = l.default.div(yb()),
                wb = l.default.div(vb());

            function Cb() {
                var e = Object(a.useState)(void 0),
                    n = Object(f.a)(e, 2),
                    t = n[0],
                    i = n[1],
                    o = Object(a.useState)(void 0),
                    c = Object(f.a)(o, 2),
                    s = c[0],
                    u = c[1],
                    l = Object(a.useState)([]),
                    d = Object(f.a)(l, 2),
                    p = d[0],
                    b = d[1];
                return Object(r.jsx)(a.Suspense, {
                    fallback: null,
                    children: Object(r.jsx)(j.a, {
                        children: Object(r.jsx)(xb, {
                            children: Object(r.jsx)(ob.Provider, {
                                value: {
                                    selectedLanguage: t,
                                    setSelectedLanguage: i,
                                    translatedLanguage: s,
                                    setTranslatedLanguage: u
                                },
                                children: Object(r.jsx)(Cr.Provider, {
                                    value: {
                                        translations: p,
                                        setTranslations: b
                                    },
                                    children: Object(r.jsx)(hb, {
                                        children: Object(r.jsxs)(gb, {
                                            children: [Object(r.jsx)(Ot, {}), Object(r.jsx)(St, {
                                                children: Object(r.jsxs)(m.d, {
                                                    children: [Object(r.jsx)(m.b, {
                                                        exact: !0,
                                                        strict: !0,
                                                        path: "/swap",
                                                        component: tb
                                                    }), Object(r.jsx)(m.b, {
                                                        exact: !0,
                                                        strict: !0,
                                                        path: "/swap/:outputCurrency",
                                                        component: ab
                                                    }), Object(r.jsx)(m.b, {
                                                        exact: !0,
                                                        strict: !0,
                                                        path: "/send",
                                                        component: rb
                                                    }), Object(r.jsx)(m.b, {
                                                        exact: !0,
                                                        strict: !0,
                                                        path: "/find",
                                                        component: Ed
                                                    }), Object(r.jsx)(m.b, {
                                                        exact: !0,
                                                        strict: !0,
                                                        path: "/pool",
                                                        component: Id
                                                    }), Object(r.jsx)(m.b, {
                                                        exact: !0,
                                                        strict: !0,
                                                        path: "/create",
                                                        component: fl
                                                    }), Object(r.jsx)(m.b, {
                                                        exact: !0,
                                                        path: "/add",
                                                        component: bl
                                                    }), Object(r.jsx)(m.b, {
                                                        exact: !0,
                                                        path: "/add/:currencyIdA",
                                                        component: ml
                                                    }), Object(r.jsx)(m.b, {
                                                        exact: !0,
                                                        path: "/add/:currencyIdA/:currencyIdB",
                                                        component: hl
                                                    }), Object(r.jsx)(m.b, {
                                                        exact: !0,
                                                        strict: !0,
                                                        path: "/remove/v1/:address",
                                                        component: Kl
                                                    }), Object(r.jsx)(m.b, {
                                                        exact: !0,
                                                        strict: !0,
                                                        path: "/remove/:tokens",
                                                        component: Wd
                                                    }), Object(r.jsx)(m.b, {
                                                        exact: !0,
                                                        strict: !0,
                                                        path: "/remove/:currencyIdA/:currencyIdB",
                                                        component: Fd
                                                    }), Object(r.jsx)(m.b, {
                                                        exact: !0,
                                                        strict: !0,
                                                        path: "/migrate/v1",
                                                        component: wl
                                                    }), Object(r.jsx)(m.b, {
                                                        exact: !0,
                                                        strict: !0,
                                                        path: "/migrate/v1/:address",
                                                        component: Dl
                                                    }), Object(r.jsx)(m.b, {
                                                        component: rb
                                                    })]
                                                })
                                            }), Object(r.jsx)(wb, {})]
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            }
            var kb = "visibilityState" in document;

            function Tb() {
                return !kb || "hidden" !== document.visibilityState
            }

            function Ib() {
                var e = Object(a.useState)(Tb()),
                    n = Object(f.a)(e, 2),
                    t = n[0],
                    r = n[1],
                    i = Object(a.useCallback)((function() {
                        r(Tb())
                    }), [r]);
                return Object(a.useEffect)((function() {
                    if (kb) return document.addEventListener("visibilitychange", i),
                        function() {
                            document.removeEventListener("visibilitychange", i)
                        }
                }), [i]), t
            }

            function Eb() {
                var e = Ue(),
                    n = e.library,
                    t = e.chainId,
                    r = Object(h.c)(),
                    i = Ib(),
                    o = Object(a.useState)({
                        chainId: t,
                        blockNumber: null
                    }),
                    c = Object(f.a)(o, 2),
                    s = c[0],
                    u = c[1],
                    l = Object(a.useCallback)((function(e) {
                        u((function(n) {
                            return t === n.chainId ? "number" !== typeof n.blockNumber ? {
                                chainId: t,
                                blockNumber: e
                            } : {
                                chainId: t,
                                blockNumber: Math.max(e, n.blockNumber)
                            } : n
                        }))
                    }), [t, u]);
                Object(a.useEffect)((function() {
                    if (n && t && i) return u({
                            chainId: t,
                            blockNumber: null
                        }), n.getBlockNumber().then(l).catch((function(e) {
                            return console.error("Failed to get block number for chainId: ".concat(t), e)
                        })), n.on("block", l),
                        function() {
                            n.removeListener("block", l)
                        }
                }), [r, t, n, l, i]);
                var d = _u(s, 100);
                return Object(a.useEffect)((function() {
                    d.chainId && d.blockNumber && i && r(Pe({
                        chainId: d.chainId,
                        blockNumber: d.blockNumber
                    }))
                }), [i, r, d.blockNumber, d.chainId]), null
            }

            function Ab() {
                var e = Ue().library,
                    n = Object(h.c)(),
                    t = Object(h.d)((function(e) {
                        return e.lists.byUrl
                    })),
                    r = Ib(),
                    i = oc();
                return Pi(Object(a.useCallback)((function() {
                    r && Object.keys(t).forEach((function(e) {
                        return i(e).catch((function(e) {
                            return console.error("interval list fetching error", e)
                        }))
                    }))
                }), [i, r, t]), e ? 6e5 : null), Object(a.useEffect)((function() {
                    Object.keys(t).forEach((function(e) {
                        var n = t[e];
                        n.current || n.loadingRequestId || n.error || i(e).catch((function(e) {
                            return console.error("list added fetching error", e)
                        }))
                    }))
                }), [n, i, e, t]), Object(a.useEffect)((function() {
                    Object.keys(t).forEach((function(e) {
                        var r = t[e];
                        if (r.current && r.pendingUpdate) {
                            var a = Object(Xe.c)(r.current.version, r.pendingUpdate.version);
                            switch (a) {
                                case Xe.a.NONE:
                                    throw new Error("unexpected no version bump");
                                case Xe.a.PATCH:
                                case Xe.a.MINOR:
                                    a >= Object(Xe.d)(r.current.tokens, r.pendingUpdate.tokens) ? (n($e(e)), n(Le({
                                        key: e,
                                        content: {
                                            listUpdate: {
                                                listUrl: e,
                                                oldList: r.current,
                                                newList: r.pendingUpdate,
                                                auto: !0
                                            }
                                        }
                                    }))) : console.error("List at url ".concat(e, " could not automatically update because the version bump was only PATCH/MINOR while the update had breaking changes and should have been MAJOR"));
                                    break;
                                case Xe.a.MAJOR:
                                    n(Le({
                                        key: e,
                                        content: {
                                            listUpdate: {
                                                listUrl: e,
                                                auto: !1,
                                                oldList: r.current,
                                                newList: r.pendingUpdate
                                            }
                                        },
                                        removeAfterMs: null
                                    }))
                            }
                        }
                    }))
                }), [n, t]), null
            }

            function Nb(e, n) {
                return t = e + Math.round(Math.random() * Math.max(0, n - e)), new Promise((function(e) {
                    return setTimeout(e, t)
                }));
                var t
            }
            var Sb = function(e) {
                    Object(S.a)(t, e);
                    var n = Object(R.a)(t);

                    function t() {
                        return Object(A.a)(this, t), n.call(this, "Cancelled")
                    }
                    return t
                }(Object(L.a)(Error)),
                Rb = function(e) {
                    Object(S.a)(t, e);
                    var n = Object(R.a)(t);

                    function t() {
                        return Object(A.a)(this, t), n.apply(this, arguments)
                    }
                    return t
                }(Object(L.a)(Error));

            function Ub() {
                return (Ub = Object(E.a)(I.a.mark((function e(n, t, r) {
                    var a, i, o, c;
                    return I.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return console.info("Fetching chunk", n, t, r), e.prev = 1, e.next = 4, n.aggregate(t.map((function(e) {
                                    return [e.address, e.callData]
                                })));
                            case 4:
                                o = e.sent, c = Object(f.a)(o, 2), a = c[0], i = c[1], e.next = 14;
                                break;
                            case 10:
                                throw e.prev = 10, e.t0 = e.catch(1), console.info("Failed to fetch chunk inside retry", e.t0), e.t0;
                            case 14:
                                if (!(a.toNumber() < r)) {
                                    e.next = 17;
                                    break
                                }
                                throw console.info("Fetched results for old block number: ".concat(a.toString(), " vs. ").concat(r)), new Rb("Fetched for old block number");
                            case 17:
                                return e.abrupt("return", {
                                    results: i,
                                    blockNumber: a.toNumber()
                                });
                            case 18:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 10]
                    ])
                })))).apply(this, arguments)
            }

            function _b() {
                var e = Object(h.c)(),
                    n = Object(h.d)((function(e) {
                        return e.multicall
                    })),
                    t = _u(n.callListeners, 100),
                    r = ze(),
                    i = Ue().chainId,
                    o = ei(),
                    c = Object(a.useRef)(),
                    s = Object(a.useMemo)((function() {
                        return function(e, n) {
                            if (!e || !n) return {};
                            var t = e[n];
                            return t ? Object.keys(t).reduce((function(e, n) {
                                var r = t[n];
                                return e[n] = Object.keys(r).filter((function(e) {
                                    var n = parseInt(e);
                                    return !(n <= 0) && r[n] > 0
                                })).reduce((function(e, n) {
                                    return Math.min(e, parseInt(n))
                                }), 1 / 0), e
                            }), {}) : {}
                        }(t, i)
                    }), [t, i]),
                    u = Object(a.useMemo)((function() {
                        return function(e, n, t, r) {
                            return t && r ? e[t] ? Object.keys(n).filter((function(a) {
                                var i = n[a],
                                    o = e[t][a];
                                if (!o) return !0;
                                var c = r - (i - 1);
                                return !(o.fetchingBlockNumber && o.fetchingBlockNumber >= c) && (!o.blockNumber || o.blockNumber < c)
                            })) : Object.keys(n) : []
                        }(n.callResults, s, i, r)
                    }), [i, n.callResults, s, r]),
                    l = Object(a.useMemo)((function() {
                        return JSON.stringify(u.sort())
                    }), [u]);
                return Object(a.useEffect)((function() {
                    var n;
                    if (r && i && o) {
                        var t = JSON.parse(l);
                        if (0 !== t.length) {
                            var a, s, u = t.map((function(e) {
                                    return Kr(e)
                                })),
                                d = function(e, n) {
                                    if (n < 1) throw new Error("maxChunkSize must be gte 1");
                                    if (e.length <= n) return [e];
                                    var t = Math.ceil(e.length / n),
                                        r = Math.ceil(e.length / t);
                                    return Object(ce.a)(Array(t).keys()).map((function(n) {
                                        return e.slice(n * r, n * r + r)
                                    }))
                                }(u, 500);
                            if ((null === (n = c.current) || void 0 === n ? void 0 : n.blockNumber) !== r) null === (a = c.current) || void 0 === a || null === (s = a.cancellations) || void 0 === s || s.forEach((function(e) {
                                return e()
                            }));
                            e(Zr({
                                calls: u,
                                chainId: i,
                                fetchingBlockNumber: r
                            })), c.current = {
                                blockNumber: r,
                                cancellations: d.map((function(n, a) {
                                    var s = function(e, n) {
                                            var t, r = n.n,
                                                a = n.minWait,
                                                i = n.maxWait,
                                                o = !1;
                                            return {
                                                promise: new Promise(function() {
                                                    var n = Object(E.a)(I.a.mark((function n(c, s) {
                                                        var u;
                                                        return I.a.wrap((function(n) {
                                                            for (;;) switch (n.prev = n.next) {
                                                                case 0:
                                                                    t = s;
                                                                case 1:
                                                                    return u = void 0, n.prev = 3, n.next = 6, e();
                                                                case 6:
                                                                    return u = n.sent, o || (c(u), o = !0), n.abrupt("break", 24);
                                                                case 11:
                                                                    if (n.prev = 11, n.t0 = n.catch(3), !o) {
                                                                        n.next = 15;
                                                                        break
                                                                    }
                                                                    return n.abrupt("break", 24);
                                                                case 15:
                                                                    if (!(r <= 0) && n.t0 instanceof Rb) {
                                                                        n.next = 19;
                                                                        break
                                                                    }
                                                                    return s(n.t0), o = !0, n.abrupt("break", 24);
                                                                case 19:
                                                                    r--;
                                                                case 20:
                                                                    return n.next = 22, Nb(a, i);
                                                                case 22:
                                                                    n.next = 1;
                                                                    break;
                                                                case 24:
                                                                case "end":
                                                                    return n.stop()
                                                            }
                                                        }), n, null, [
                                                            [3, 11]
                                                        ])
                                                    })));
                                                    return function(e, t) {
                                                        return n.apply(this, arguments)
                                                    }
                                                }()),
                                                cancel: function() {
                                                    o || (o = !0, t(new Sb))
                                                }
                                            }
                                        }((function() {
                                            return function(e, n, t) {
                                                return Ub.apply(this, arguments)
                                            }(o, n, r)
                                        }), {
                                            n: 1 / 0,
                                            minWait: 2500,
                                            maxWait: 3500
                                        }),
                                        u = s.cancel;
                                    return s.promise.then((function(o) {
                                        var s = o.results,
                                            u = o.blockNumber;
                                        c.current = {
                                            cancellations: [],
                                            blockNumber: r
                                        };
                                        var l = d.slice(0, a).reduce((function(e, n) {
                                                return e + n.length
                                            }), 0),
                                            p = l + s.length;
                                        e(ea({
                                            chainId: i,
                                            results: t.slice(l, p).reduce((function(e, n, t) {
                                                var r;
                                                return e[n] = null !== (r = s[t]) && void 0 !== r ? r : null, e
                                            }), {}),
                                            blockNumber: u
                                        })), console.info("Success to fetch multicall chunk", n, i)
                                    })).catch((function(t) {
                                        t instanceof Sb ? console.error("Cancelled fetch for blockNumber", r) : (console.error("Failed to fetch multicall chunk", n, i, t), e($r({
                                            calls: n,
                                            chainId: i,
                                            fetchingBlockNumber: r
                                        })))
                                    })), u
                                }))
                            }
                        }
                    }
                }), [i, o, e, l, r]), null
            }

            function Pb() {
                var e, n = Ue(),
                    t = n.chainId,
                    r = n.library,
                    i = ze(),
                    o = Object(h.c)(),
                    c = Object(h.d)((function(e) {
                        return e.transactions
                    })),
                    s = t && null !== (e = c[t]) && void 0 !== e ? e : {},
                    u = function() {
                        var e = Object(h.c)();
                        return Object(a.useCallback)((function(n, t) {
                            e(Le({
                                content: n,
                                key: t
                            }))
                        }), [e])
                    }();
                return Object(a.useEffect)((function() {
                    t && r && i && Object.keys(s).filter((function(e) {
                        return function(e, n) {
                            if (n.receipt) return !1;
                            if (!n.lastCheckedBlockNumber) return !0;
                            var t = e - n.lastCheckedBlockNumber;
                            if (t < 1) return !1;
                            var r = ((new Date).getTime() - n.addedTime) / 1e3 / 60;
                            return r > 60 ? t > 9 : !(r > 5) || t > 2
                        }(i, s[e])
                    })).forEach((function(e) {
                        r.getTransactionReceipt(e).then((function(n) {
                            var r;
                            n ? (o(ju({
                                chainId: t,
                                hash: e,
                                receipt: {
                                    blockHash: n.blockHash,
                                    blockNumber: n.blockNumber,
                                    contractAddress: n.contractAddress,
                                    from: n.from,
                                    status: n.status,
                                    to: n.to,
                                    transactionHash: n.transactionHash,
                                    transactionIndex: n.transactionIndex
                                }
                            })), u({
                                txn: {
                                    hash: e,
                                    success: 1 === n.status,
                                    summary: null === (r = s[e]) || void 0 === r ? void 0 : r.summary
                                }
                            }, e)) : o(mu({
                                chainId: t,
                                hash: e,
                                blockNumber: i
                            }))
                        })).catch((function(n) {
                            console.error("failed to check transaction hash: ".concat(e), n)
                        }))
                    }))
                }), [t, r, s, i, o, u]), null
            }
            var Bb = t(175),
                Mb = Object(_e.c)({
                    blockNumber: {},
                    popupList: [],
                    walletModalOpen: !1,
                    settingsMenuOpen: !1
                }, (function(e) {
                    return e.addCase(Pe, (function(e, n) {
                        var t = n.payload,
                            r = t.chainId,
                            a = t.blockNumber;
                        "number" !== typeof e.blockNumber[r] ? e.blockNumber[r] = a : e.blockNumber[r] = Math.max(a, e.blockNumber[r])
                    })).addCase(Be, (function(e) {
                        e.walletModalOpen = !e.walletModalOpen
                    })).addCase(Me, (function(e) {
                        e.settingsMenuOpen = !e.settingsMenuOpen
                    })).addCase(Le, (function(e, n) {
                        var t = n.payload,
                            r = t.content,
                            a = t.key,
                            i = t.removeAfterMs,
                            o = void 0 === i ? 15e3 : i;
                        e.popupList = (a ? e.popupList.filter((function(e) {
                            return e.key !== a
                        })) : e.popupList).concat([{
                            key: a || Object(_e.e)(),
                            show: !0,
                            content: r,
                            removeAfterMs: o
                        }])
                    })).addCase(De, (function(e, n) {
                        var t = n.payload.key;
                        e.popupList.forEach((function(e) {
                            e.key === t && (e.show = !1)
                        }))
                    }))
                })),
                Lb = Object(_e.b)("global/updateVersion"),
                Db = (_e.b, function() {
                    return (new Date).getTime()
                });

            function zb(e, n) {
                return "".concat(e, ";").concat(n)
            }
            var Yb, qb = {
                    userDarkMode: null,
                    matchesDarkMode: !1,
                    userExpertMode: !1,
                    userSlippageTolerance: ge,
                    userDeadline: we,
                    tokens: {},
                    pairs: {},
                    timestamp: Db(),
                    audioPlay: !0
                },
                Fb = Object(_e.c)(qb, (function(e) {
                    return e.addCase(Lb, (function(e) {
                        "number" !== typeof e.userSlippageTolerance && (e.userSlippageTolerance = ge), "number" !== typeof e.userDeadline && (e.userDeadline = we), e.lastUpdateVersionTimestamp = Db()
                    })).addCase(ja, (function(e, n) {
                        e.userDarkMode = n.payload.userDarkMode, e.timestamp = Db()
                    })).addCase(fa, (function(e, n) {
                        e.matchesDarkMode = n.payload.matchesDarkMode, e.timestamp = Db()
                    })).addCase(ma, (function(e, n) {
                        e.userExpertMode = n.payload.userExpertMode, e.timestamp = Db()
                    })).addCase(ha, (function(e, n) {
                        e.userSlippageTolerance = n.payload.userSlippageTolerance, e.timestamp = Db()
                    })).addCase(va, (function(e, n) {
                        e.userDeadline = n.payload.userDeadline, e.timestamp = Db()
                    })).addCase(ya, (function(e, n) {
                        var t = n.payload.serializedToken;
                        e.tokens[t.chainId] = e.tokens[t.chainId] || {}, e.tokens[t.chainId][t.address] = t, e.timestamp = Db()
                    })).addCase(Oa, (function(e, n) {
                        var t = n.payload,
                            r = t.address,
                            a = t.chainId;
                        e.tokens[a] = e.tokens[a] || {}, delete e.tokens[a][r], e.timestamp = Db()
                    })).addCase(xa, (function(e, n) {
                        var t = n.payload.serializedPair;
                        if (t.token0.chainId === t.token1.chainId && t.token0.address !== t.token1.address) {
                            var r = t.token0.chainId;
                            e.pairs[r] = e.pairs[r] || {}, e.pairs[r][zb(t.token0.address, t.token1.address)] = t
                        }
                        e.timestamp = Db()
                    })).addCase(ga, (function(e, n) {
                        var t = n.payload,
                            r = t.chainId,
                            a = t.tokenAAddress,
                            i = t.tokenBAddress;
                        e.pairs[r] && (delete e.pairs[r][zb(a, i)], delete e.pairs[r][zb(i, a)]), e.timestamp = Db()
                    })).addCase(wa, (function(e) {
                        e.audioPlay = !1
                    })).addCase(Ca, (function(e) {
                        e.audioPlay = !0
                    }))
                })),
                Vb = function() {
                    return (new Date).getTime()
                },
                Wb = Object(_e.c)({}, (function(e) {
                    return e.addCase(bu, (function(e, n) {
                        var t, r, a = n.payload,
                            i = a.chainId,
                            o = a.from,
                            c = a.hash,
                            s = a.approval,
                            u = a.summary;
                        if (null === (t = e[i]) || void 0 === t ? void 0 : t[c]) throw Error("Attempted to add existing transaction.");
                        var l = null !== (r = e[i]) && void 0 !== r ? r : {};
                        l[c] = {
                            hash: c,
                            approval: s,
                            summary: u,
                            from: o,
                            addedTime: Vb()
                        }, e[i] = l
                    })).addCase(fu, (function(e, n) {
                        var t = n.payload.chainId;
                        e[t] && (e[t] = {})
                    })).addCase(mu, (function(e, n) {
                        var t, r = n.payload,
                            a = r.chainId,
                            i = r.hash,
                            o = r.blockNumber,
                            c = null === (t = e[a]) || void 0 === t ? void 0 : t[i];
                        c && (c.lastCheckedBlockNumber ? c.lastCheckedBlockNumber = Math.max(o, c.lastCheckedBlockNumber) : c.lastCheckedBlockNumber = o)
                    })).addCase(ju, (function(e, n) {
                        var t, r = n.payload,
                            a = r.hash,
                            i = r.chainId,
                            o = r.receipt,
                            c = null === (t = e[i]) || void 0 === t ? void 0 : t[a];
                        c && (c.receipt = o, c.confirmedTime = Vb())
                    }))
                })),
                Hb = (Yb = {
                    independentField: au.INPUT,
                    typedValue: ""
                }, Object(O.a)(Yb, au.INPUT, {
                    currencyId: ""
                }), Object(O.a)(Yb, au.OUTPUT, {
                    currencyId: ""
                }), Object(O.a)(Yb, "recipient", null), Yb),
                Qb = Object(_e.c)(Hb, (function(e) {
                    return e.addCase(du, (function(e, n) {
                        var t, r = n.payload,
                            a = r.typedValue,
                            i = r.recipient,
                            o = r.field,
                            c = r.inputCurrencyId,
                            s = r.outputCurrencyId;
                        return t = {}, Object(O.a)(t, au.INPUT, {
                            currencyId: c
                        }), Object(O.a)(t, au.OUTPUT, {
                            currencyId: s
                        }), Object(O.a)(t, "independentField", o), Object(O.a)(t, "typedValue", a), Object(O.a)(t, "recipient", i), t
                    })).addCase(su, (function(e, n) {
                        var t, r = n.payload,
                            a = r.currencyId,
                            i = r.field,
                            o = i === au.INPUT ? au.OUTPUT : au.INPUT;
                        return a === e[o].currencyId ? Object(V.a)(Object(V.a)({}, e), {}, (t = {
                            independentField: e.independentField === au.INPUT ? au.OUTPUT : au.INPUT
                        }, Object(O.a)(t, i, {
                            currencyId: a
                        }), Object(O.a)(t, o, {
                            currencyId: e[i].currencyId
                        }), t)) : Object(V.a)(Object(V.a)({}, e), {}, Object(O.a)({}, i, {
                            currencyId: a
                        }))
                    })).addCase(uu, (function(e) {
                        var n;
                        return Object(V.a)(Object(V.a)({}, e), {}, (n = {
                            independentField: e.independentField === au.INPUT ? au.OUTPUT : au.INPUT
                        }, Object(O.a)(n, au.INPUT, {
                            currencyId: e[au.OUTPUT].currencyId
                        }), Object(O.a)(n, au.OUTPUT, {
                            currencyId: e[au.INPUT].currencyId
                        }), n))
                    })).addCase(lu, (function(e, n) {
                        var t = n.payload,
                            r = t.field,
                            a = t.typedValue;
                        return Object(V.a)(Object(V.a)({}, e), {}, {
                            independentField: r,
                            typedValue: a
                        })
                    })).addCase(pu, (function(e, n) {
                        var t = n.payload.recipient;
                        e.recipient = t
                    }))
                })),
                Gb = {
                    independentField: gu.CURRENCY_A,
                    typedValue: "",
                    otherTypedValue: ""
                },
                Kb = Object(_e.c)(Gb, (function(e) {
                    return e.addCase(Ru, (function() {
                        return Gb
                    })).addCase(Su, (function(e, n) {
                        var t = n.payload,
                            r = t.field,
                            a = t.typedValue;
                        return t.noLiquidity ? r === e.independentField ? Object(V.a)(Object(V.a)({}, e), {}, {
                            independentField: r,
                            typedValue: a
                        }) : Object(V.a)(Object(V.a)({}, e), {}, {
                            independentField: r,
                            typedValue: a,
                            otherTypedValue: e.typedValue
                        }) : Object(V.a)(Object(V.a)({}, e), {}, {
                            independentField: r,
                            typedValue: a,
                            otherTypedValue: ""
                        })
                    }))
                })),
                Jb = {
                    error: null,
                    current: null,
                    loadingRequestId: null,
                    pendingUpdate: null
                },
                Xb = {
                    lastInitializedDefaultListOfLists: Ko,
                    byUrl: Object(V.a)(Object(V.a)({}, Ko.reduce((function(e, n) {
                        return e[n] = Jb, e
                    }), {})), {}, Object(O.a)({}, Go, {
                        error: null,
                        current: Jo,
                        loadingRequestId: null,
                        pendingUpdate: null
                    })),
                    selectedListUrl: Go
                },
                Zb = Object(_e.c)(Xb, (function(e) {
                    return e.addCase(Ze.pending, (function(e, n) {
                        var t = n.payload,
                            r = t.requestId,
                            a = t.url;
                        e.byUrl[a] = Object(V.a)(Object(V.a)({
                            current: null,
                            pendingUpdate: null
                        }, e.byUrl[a]), {}, {
                            loadingRequestId: r,
                            error: null
                        })
                    })).addCase(Ze.fulfilled, (function(e, n) {
                        var t, r, a = n.payload,
                            i = a.requestId,
                            o = a.tokenList,
                            c = a.url,
                            s = null === (t = e.byUrl[c]) || void 0 === t ? void 0 : t.current,
                            u = null === (r = e.byUrl[c]) || void 0 === r ? void 0 : r.loadingRequestId;
                        if (s) {
                            if (Object(Xe.c)(s.version, o.version) === Xe.a.NONE) return;
                            null !== u && u !== i || (e.byUrl[c] = Object(V.a)(Object(V.a)({}, e.byUrl[c]), {}, {
                                loadingRequestId: null,
                                error: null,
                                current: s,
                                pendingUpdate: o
                            }))
                        } else e.byUrl[c] = Object(V.a)(Object(V.a)({}, e.byUrl[c]), {}, {
                            loadingRequestId: null,
                            error: null,
                            current: o,
                            pendingUpdate: null
                        })
                    })).addCase(Ze.rejected, (function(e, n) {
                        var t, r = n.payload,
                            a = r.url,
                            i = r.requestId,
                            o = r.errorMessage;
                        (null === (t = e.byUrl[a]) || void 0 === t ? void 0 : t.loadingRequestId) === i && (e.byUrl[a] = Object(V.a)(Object(V.a)({}, e.byUrl[a]), {}, {
                            loadingRequestId: null,
                            error: o,
                            current: null,
                            pendingUpdate: null
                        }))
                    })).addCase(tn, (function(e, n) {
                        var t = n.payload;
                        e.selectedListUrl = t, e.byUrl[t] || (e.byUrl[t] = Jb)
                    })).addCase(en, (function(e, n) {
                        var t = n.payload;
                        e.byUrl[t] || (e.byUrl[t] = Jb)
                    })).addCase(nn, (function(e, n) {
                        var t = n.payload;
                        e.byUrl[t] && delete e.byUrl[t], e.selectedListUrl === t && (e.selectedListUrl = Object.keys(e.byUrl)[0])
                    })).addCase($e, (function(e, n) {
                        var t, r = n.payload;
                        if (!(null === (t = e.byUrl[r]) || void 0 === t ? void 0 : t.pendingUpdate)) throw new Error("accept list update called without pending update");
                        e.byUrl[r] = Object(V.a)(Object(V.a)({}, e.byUrl[r]), {}, {
                            pendingUpdate: null,
                            current: e.byUrl[r].pendingUpdate
                        })
                    })).addCase(Lb, (function(e) {
                        if (e.lastInitializedDefaultListOfLists) {
                            if (e.lastInitializedDefaultListOfLists) {
                                var n = e.lastInitializedDefaultListOfLists.reduce((function(e, n) {
                                        return e.add(n)
                                    }), new Set),
                                    t = Ko.reduce((function(e, n) {
                                        return e.add(n)
                                    }), new Set);
                                Ko.forEach((function(t) {
                                    n.has(t) || (e.byUrl[t] = Jb)
                                })), e.lastInitializedDefaultListOfLists.forEach((function(n) {
                                    t.has(n) || delete e.byUrl[n]
                                }))
                            }
                        } else e.byUrl = Xb.byUrl, e.selectedListUrl = void 0;
                        e.lastInitializedDefaultListOfLists = Ko
                    }))
                })),
                $b = {
                    independentField: Ud.LIQUIDITY_PERCENT,
                    typedValue: "0"
                },
                ef = Object(_e.c)($b, (function(e) {
                    return e.addCase(Bd, (function(e, n) {
                        var t = n.payload,
                            r = t.field,
                            a = t.typedValue;
                        return Object(V.a)(Object(V.a)({}, e), {}, {
                            independentField: r,
                            typedValue: a
                        })
                    }))
                })),
                nf = Object(_e.c)({
                    callResults: {}
                }, (function(e) {
                    return e.addCase(Jr, (function(e, n) {
                        var t, r = n.payload,
                            a = r.calls,
                            i = r.chainId,
                            o = r.options,
                            c = (o = void 0 === o ? {} : o).blocksPerFetch,
                            s = void 0 === c ? 1 : c,
                            u = e.callListeners ? e.callListeners : e.callListeners = {};
                        u[i] = null !== (t = u[i]) && void 0 !== t ? t : {}, a.forEach((function(e) {
                            var n, t, r = Gr(e);
                            u[i][r] = null !== (n = u[i][r]) && void 0 !== n ? n : {}, u[i][r][s] = (null !== (t = u[i][r][s]) && void 0 !== t ? t : 0) + 1
                        }))
                    })).addCase(Xr, (function(e, n) {
                        var t = n.payload,
                            r = t.chainId,
                            a = t.calls,
                            i = t.options,
                            o = (i = void 0 === i ? {} : i).blocksPerFetch,
                            c = void 0 === o ? 1 : o,
                            s = e.callListeners ? e.callListeners : e.callListeners = {};
                        s[r] && a.forEach((function(e) {
                            var n = Gr(e);
                            s[r][n] && s[r][n][c] && (1 === s[r][n][c] ? delete s[r][n][c] : s[r][n][c]--)
                        }))
                    })).addCase(Zr, (function(e, n) {
                        var t, r = n.payload,
                            a = r.chainId,
                            i = r.fetchingBlockNumber,
                            o = r.calls;
                        e.callResults[a] = null !== (t = e.callResults[a]) && void 0 !== t ? t : {}, o.forEach((function(n) {
                            var t = Gr(n),
                                r = e.callResults[a][t];
                            if (r) {
                                var o;
                                if ((null !== (o = r.fetchingBlockNumber) && void 0 !== o ? o : 0) >= i) return;
                                e.callResults[a][t].fetchingBlockNumber = i
                            } else e.callResults[a][t] = {
                                fetchingBlockNumber: i
                            }
                        }))
                    })).addCase($r, (function(e, n) {
                        var t, r = n.payload,
                            a = r.fetchingBlockNumber,
                            i = r.chainId,
                            o = r.calls;
                        e.callResults[i] = null !== (t = e.callResults[i]) && void 0 !== t ? t : {}, o.forEach((function(n) {
                            var t = Gr(n),
                                r = e.callResults[i][t];
                            r && r.fetchingBlockNumber === a && (delete r.fetchingBlockNumber, r.data = null, r.blockNumber = a)
                        }))
                    })).addCase(ea, (function(e, n) {
                        var t, r = n.payload,
                            a = r.chainId,
                            i = r.results,
                            o = r.blockNumber;
                        e.callResults[a] = null !== (t = e.callResults[a]) && void 0 !== t ? t : {}, Object.keys(i).forEach((function(n) {
                            var t, r = e.callResults[a][n];
                            (null !== (t = null === r || void 0 === r ? void 0 : r.blockNumber) && void 0 !== t ? t : 0) > o || (e.callResults[a][n] = {
                                data: i[n],
                                blockNumber: o
                            })
                        }))
                    }))
                })),
                tf = ["user", "transactions"],
                rf = Object(Bb.load)({
                    states: tf
                });
            rf.user && (rf.user.userDarkMode = function() {
                var e = null;
                try {
                    var n = localStorage.getItem(ka);
                    n && (e = JSON.parse(n))
                } catch (t) {
                    console.error(t)
                }
                return e
            }());
            var af = Object(_e.a)({
                reducer: {
                    application: Mb,
                    user: Fb,
                    transactions: Wb,
                    swap: Qb,
                    mint: Kb,
                    burn: ef,
                    multicall: nf,
                    lists: Zb
                },
                middleware: [].concat(Object(ce.a)(Object(_e.d)({
                    thunk: !1
                })), [Object(Bb.save)({
                    states: tf
                })]),
                preloadedState: rf
            });
            af.dispatch(Lb());
            var of = af;

            function cf(e) {
                var n = new x.a(e);
                return n.pollingInterval = 15e3, n
            }
            var sf = Object(v.b)(xe),
                uf = function(e) {
                    var n = e.children;
                    return Object(r.jsx)(v.a, {
                        getLibrary: cf,
                        children: Object(r.jsx)(sf, {
                            getLibrary: cf,
                            children: Object(r.jsx)(h.a, {
                                store: of ,
                                children: Object(r.jsx)(lb, {
                                    children: Object(r.jsx)(s.s, {
                                        children: n
                                    })
                                })
                            })
                        })
                    })
                },
                lf = (t(396), t(177)),
                df = t(244),
                pf = t.n(df),
                bf = t(245),
                ff = t.n(bf);
            lf.a.use(pf.a).use(ff.a).use(xt.a).init({
                backend: {
                    loadPath: "./locales/{{lng}}.json"
                },
                react: {
                    useSuspense: !0
                },
                fallbackLng: "en",
                preload: ["en"],
                keySeparator: !1,
                interpolation: {
                    escapeValue: !1
                }
            });
            lf.a;
            "ethereum" in window && (window.ethereum.autoRefreshOnNetworkChange = !1), window.addEventListener("error", (function() {
                var e;
                null === (e = localStorage) || void 0 === e || e.removeItem("redux_localstorage_simple_lists")
            })), c.a.render(Object(r.jsx)(a.StrictMode, {
                children: Object(r.jsxs)(uf, {
                    children: [Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsx)(Ab, {}), Object(r.jsx)(Eb, {}), Object(r.jsx)(Pb, {}), Object(r.jsx)(_b, {})]
                    }), Object(r.jsx)(s.t, {}), Object(r.jsx)(b, {}), Object(r.jsx)(Cb, {})]
                })
            }), document.getElementById("root"))
        }
    },
    [
        [413, 3, 4]
    ]
]);
//# sourceMappingURL=main.9806f8d2.chunk.js.map