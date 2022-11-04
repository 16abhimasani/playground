/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  PrintServiceV2,
  PrintServiceV2Interface,
} from "../../contracts/PrintServiceV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_treasury",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_orderId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "_orderId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "_orderHash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_productId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_collection",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "PrintOrderReceived",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_currency",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_productIndex",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_collection",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_orderHash",
        type: "bytes32",
      },
    ],
    name: "buy",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "config",
    outputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "inStock",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "orderId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_currency",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_productIndex",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_inStock",
        type: "bool",
      },
    ],
    name: "setInStock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_currency",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_productIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "setPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_currency",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "id",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "inStock",
            type: "bool",
          },
        ],
        internalType: "struct PrintServiceV2.Product[]",
        name: "_products",
        type: "tuple[]",
      },
    ],
    name: "setProducts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_treasury",
        type: "address",
      },
    ],
    name: "setTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treasury",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001a7038038062001a708339818101604052810190620000379190620001a1565b620000576200004b620000a760201b60201c565b620000af60201b60201c565b81600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600181905550505062000254565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050620001848162000220565b92915050565b6000815190506200019b816200023a565b92915050565b60008060408385031215620001b557600080fd5b6000620001c58582860162000173565b9250506020620001d8858286016200018a565b9150509250929050565b6000620001ef82620001f6565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6200022b81620001e2565b81146200023757600080fd5b50565b620002458162000216565b81146200025157600080fd5b50565b61180c80620002646000396000f3fe60806040526004361061009c5760003560e01c80637817ffb8116100645780637817ffb8146101605780638da5cb5b1461019f578063a1c66fbf146101ca578063bbafdf54146101f3578063f0f442601461020f578063f2fde38b146102385761009c565b8063163de5e5146100a15780632d31a93e146100cc5780633011e16a146100f557806361d027b31461011e578063715018a614610149575b600080fd5b3480156100ad57600080fd5b506100b6610261565b6040516100c391906112eb565b60405180910390f35b3480156100d857600080fd5b506100f360048036038101906100ee9190610fb1565b610267565b005b34801561010157600080fd5b5061011c60048036038101906101179190611000565b6102df565b005b34801561012a57600080fd5b50610133610344565b60405161014091906111db565b60405180910390f35b34801561015557600080fd5b5061015e61036a565b005b34801561016c57600080fd5b5061018760048036038101906101829190610efe565b61037e565b6040516101969392919061122d565b60405180910390f35b3480156101ab57600080fd5b506101b461044a565b6040516101c191906111c0565b60405180910390f35b3480156101d657600080fd5b506101f160048036038101906101ec9190610eaa565b610473565b005b61020d60048036038101906102089190610f3a565b61057a565b005b34801561021b57600080fd5b5061023660048036038101906102319190610e81565b61098d565b005b34801561024457600080fd5b5061025f600480360381019061025a9190610e58565b6109d9565b005b60015481565b61026f610a5d565b80600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002060020160006101000a81548160ff021916908315150217905550505050565b6102e7610a5d565b80600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002060010181905550505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610372610a5d565b61037c6000610adb565b565b6003602052816000526040600020602052806000526040600020600091509150508060000180546103ae9061154c565b80601f01602080910402602001604051908101604052809291908181526020018280546103da9061154c565b80156104275780601f106103fc57610100808354040283529160200191610427565b820191906000526020600020905b81548152906001019060200180831161040a57829003601f168201915b5050505050908060010154908060020160009054906101000a900460ff16905083565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61047b610a5d565b60005b8151811015610575578181815181106104c0577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000820151816000019080519060200190610534929190610ba7565b506020820151816001015560408201518160020160006101000a81548160ff021916908315150217905550905050808061056d906115af565b91505061047e565b505050565b6000600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008681526020019081526020016000206040518060600160405290816000820180546105e79061154c565b80601f01602080910402602001604051908101604052809291908181526020018280546106139061154c565b80156106605780601f1061063557610100808354040283529160200191610660565b820191906000526020600020905b81548152906001019060200180831161064357829003601f168201915b50505050508152602001600182015481526020016002820160009054906101000a900460ff161515151581525050905060008160200151905081604001516106dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d49061128b565b60405180910390fd5b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee73ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1614156108725760003490503482111561076d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610764906112ab565b60405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16826040516107b3906111ab565b60006040518083038185875af1925050503d80600081146107f0576040519150601f19603f3d011682016040523d82523d6000602084013e6107f5565b606091505b5050503373ffffffffffffffffffffffffffffffffffffffff16828261081b919061143c565b604051610827906111ab565b60006040518083038185875af1925050503d8060008114610864576040519150601f19603f3d011682016040523d82523d6000602084013e610869565b606091505b5050505061092c565b8673ffffffffffffffffffffffffffffffffffffffff166323b872dd610896610b9f565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518463ffffffff1660e01b81526004016108d8939291906111f6565b602060405180830381600087803b1580156108f257600080fd5b505af1158015610906573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092a919061104f565b505b600180600082825461093e91906113e6565b92505081905550826001547f683b8e58d3b4c62460d6e6df4524f97da8c68e6fce307d96b224461ca40b686988888860405161097c93929190611306565b60405180910390a350505050505050565b610995610a5d565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6109e1610a5d565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610a51576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a489061126b565b60405180910390fd5b610a5a81610adb565b50565b610a65610b9f565b73ffffffffffffffffffffffffffffffffffffffff16610a8361044a565b73ffffffffffffffffffffffffffffffffffffffff1614610ad9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ad0906112cb565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b828054610bb39061154c565b90600052602060002090601f016020900481019282610bd55760008555610c1c565b82601f10610bee57805160ff1916838001178555610c1c565b82800160010185558215610c1c579182015b82811115610c1b578251825591602001919060010190610c00565b5b509050610c299190610c2d565b5090565b5b80821115610c46576000816000905550600101610c2e565b5090565b6000610c5d610c5884611362565b61133d565b90508083825260208201905082856020860282011115610c7c57600080fd5b60005b85811015610cc657813567ffffffffffffffff811115610c9e57600080fd5b808601610cab8982610dcb565b85526020850194506020840193505050600181019050610c7f565b5050509392505050565b6000610ce3610cde8461138e565b61133d565b905082815260208101848484011115610cfb57600080fd5b610d0684828561150a565b509392505050565b600081359050610d1d81611763565b92915050565b600081359050610d328161177a565b92915050565b600082601f830112610d4957600080fd5b8135610d59848260208601610c4a565b91505092915050565b600081359050610d7181611791565b92915050565b600081519050610d8681611791565b92915050565b600081359050610d9b816117a8565b92915050565b600082601f830112610db257600080fd5b8135610dc2848260208601610cd0565b91505092915050565b600060608284031215610ddd57600080fd5b610de7606061133d565b9050600082013567ffffffffffffffff811115610e0357600080fd5b610e0f84828501610da1565b6000830152506020610e2384828501610e43565b6020830152506040610e3784828501610d62565b60408301525092915050565b600081359050610e52816117bf565b92915050565b600060208284031215610e6a57600080fd5b6000610e7884828501610d0e565b91505092915050565b600060208284031215610e9357600080fd5b6000610ea184828501610d23565b91505092915050565b60008060408385031215610ebd57600080fd5b6000610ecb85828601610d0e565b925050602083013567ffffffffffffffff811115610ee857600080fd5b610ef485828601610d38565b9150509250929050565b60008060408385031215610f1157600080fd5b6000610f1f85828601610d0e565b9250506020610f3085828601610e43565b9150509250929050565b600080600080600060a08688031215610f5257600080fd5b6000610f6088828901610d0e565b9550506020610f7188828901610e43565b9450506040610f8288828901610d0e565b9350506060610f9388828901610e43565b9250506080610fa488828901610d8c565b9150509295509295909350565b600080600060608486031215610fc657600080fd5b6000610fd486828701610d0e565b9350506020610fe586828701610e43565b9250506040610ff686828701610d62565b9150509250925092565b60008060006060848603121561101557600080fd5b600061102386828701610d0e565b935050602061103486828701610e43565b925050604061104586828701610e43565b9150509250925092565b60006020828403121561106157600080fd5b600061106f84828501610d77565b91505092915050565b611081816114d4565b82525050565b61109081611482565b82525050565b61109f81611470565b82525050565b6110ae81611494565b82525050565b60006110bf826113bf565b6110c981856113d5565b93506110d9818560208601611519565b6110e281611685565b840191505092915050565b60006110fa6026836113d5565b915061110582611696565b604082019050919050565b600061111d600c836113d5565b9150611128826116e5565b602082019050919050565b60006111406014836113d5565b915061114b8261170e565b602082019050919050565b60006111636020836113d5565b915061116e82611737565b602082019050919050565b60006111866000836113ca565b915061119182611760565b600082019050919050565b6111a5816114ca565b82525050565b60006111b682611179565b9150819050919050565b60006020820190506111d56000830184611096565b92915050565b60006020820190506111f06000830184611087565b92915050565b600060608201905061120b6000830186611096565b6112186020830185611078565b611225604083018461119c565b949350505050565b6000606082019050818103600083015261124781866110b4565b9050611256602083018561119c565b61126360408301846110a5565b949350505050565b60006020820190508181036000830152611284816110ed565b9050919050565b600060208201905081810360008301526112a481611110565b9050919050565b600060208201905081810360008301526112c481611133565b9050919050565b600060208201905081810360008301526112e481611156565b9050919050565b6000602082019050611300600083018461119c565b92915050565b600060608201905061131b600083018661119c565b6113286020830185611096565b611335604083018461119c565b949350505050565b6000611347611358565b9050611353828261157e565b919050565b6000604051905090565b600067ffffffffffffffff82111561137d5761137c611656565b5b602082029050602081019050919050565b600067ffffffffffffffff8211156113a9576113a8611656565b5b6113b282611685565b9050602081019050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b60006113f1826114ca565b91506113fc836114ca565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611431576114306115f8565b5b828201905092915050565b6000611447826114ca565b9150611452836114ca565b925082821015611465576114646115f8565b5b828203905092915050565b600061147b826114aa565b9050919050565b600061148d826114aa565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006114df826114e6565b9050919050565b60006114f1826114f8565b9050919050565b6000611503826114aa565b9050919050565b82818337600083830152505050565b60005b8381101561153757808201518184015260208101905061151c565b83811115611546576000848401525b50505050565b6000600282049050600182168061156457607f821691505b6020821081141561157857611577611627565b5b50919050565b61158782611685565b810181811067ffffffffffffffff821117156115a6576115a5611656565b5b80604052505050565b60006115ba826114ca565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156115ed576115ec6115f8565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f7574206f662073746f636b0000000000000000000000000000000000000000600082015250565b7f496e73756666696369656e74207061796d656e74000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b50565b61176c81611470565b811461177757600080fd5b50565b61178381611482565b811461178e57600080fd5b50565b61179a81611494565b81146117a557600080fd5b50565b6117b1816114a0565b81146117bc57600080fd5b50565b6117c8816114ca565b81146117d357600080fd5b5056fea26469706673582212208235ada87e030a9a35438f1d3b7efce7eadb11b21d8c0e6ca19fe765c2c7f47264736f6c63430008040033";

type PrintServiceV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PrintServiceV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PrintServiceV2__factory extends ContractFactory {
  constructor(...args: PrintServiceV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _treasury: PromiseOrValue<string>,
    _orderId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PrintServiceV2> {
    return super.deploy(
      _treasury,
      _orderId,
      overrides || {}
    ) as Promise<PrintServiceV2>;
  }
  override getDeployTransaction(
    _treasury: PromiseOrValue<string>,
    _orderId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_treasury, _orderId, overrides || {});
  }
  override attach(address: string): PrintServiceV2 {
    return super.attach(address) as PrintServiceV2;
  }
  override connect(signer: Signer): PrintServiceV2__factory {
    return super.connect(signer) as PrintServiceV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PrintServiceV2Interface {
    return new utils.Interface(_abi) as PrintServiceV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PrintServiceV2 {
    return new Contract(address, _abi, signerOrProvider) as PrintServiceV2;
  }
}
