import { IPhones } from '../typings';



//对象一般用 interface 而不用 type
// 原因 interface 可以继承
export const PHONES: IPhones[] = [
  {
    id: 1,
    name: 'IPhone 12',
    limit: 3,
    color: [
      {
        cid: 1,
        mark: 'black',
        title: '黑色',
        img: 'https://img10.360buyimg.com/n1/s450x450_jfs/t1/113960/3/20088/56974/5f861926E5153a0ef/1831cb31ecb63f24.jpg'
      },
      {
        cid: 2,
        mark: 'white',
        title: '白色',
        img: 'https://img10.360buyimg.com/n1/s450x450_jfs/t1/132022/23/12216/60913/5f86195bEacd08599/c5dc348d3f943324.jpg'
      },
      {
        cid: 3,
        mark: 'blue',
        title: '蓝色',
        img: 'https://img14.360buyimg.com/n1/s450x450_jfs/t1/135834/8/12159/69414/5f8619caE7d358383/d44b88e3bcaff342.jpg'
      },
      {
        cid: 4,
        mark: 'green',
        title: '绿色',
        img: 'https://img10.360buyimg.com/n1/s450x450_jfs/t1/120344/32/14989/43851/5f861a0fEdd59a92d/3c64d4346f9a6cf3.jpg'
      }
    ],
    version: [
      {
        vid: 1,
        mark: '64',
        title: '64GB',
        price:4799
      },
      {
        vid: 2,
        mark: '128',
        title: '128GB',
        price:5199
      },
      {
        vid: 3,
        mark: '256',
        title: '256GB',
        price:5799
      }
    ]
  },
  {
    id: 2,
    name: 'IPhone 12 Pro',
    limit: 2,
    color: [
      {
        cid: 1,
        mark: 'black',
        title: '石墨色',
        img: 'https://img12.360buyimg.com/n1/s450x450_jfs/t1/202185/6/7059/42507/61457bc2E03ecf515/7053d44e2d005249.jpg'
      },
      {
        cid: 2,
        mark: 'white',
        title: '白色',
        img: 'https://img10.360buyimg.com/n1/s450x450_jfs/t1/19436/38/19263/42522/61457d5fEfbb20054/cf44beffa9449a69.jpg'
      },
      {
        cid: 3,
        mark: 'blue',
        title: '蓝色',
        img: 'https://img11.360buyimg.com/n1/s450x450_jfs/t1/96507/32/18436/45938/61457815E7738182e/9c3e1366e3032cef.jpg'
      },
      {
        cid: 4,
        mark: 'gold',
        title: '金色',
        img: 'https://img10.360buyimg.com/n1/s450x450_jfs/t1/87627/23/19709/43749/614578e4E35e64651/5b0053362f2f2c09.jpg'
      }
    ],
    version: [
      {
        vid: 1,
        mark: '128',
        title: '128GB',
        price:7999
      },
      {
        vid: 2,
        mark: '256',
        title: '256GB',
        price:8499
      }
    ]
  },
  {
    id: 3,
    name: 'IPhone 13',
    limit: 4,
    color: [
      {
        cid: 1,
        mark: 'black',
        title: '午夜色',
        img: 'https://img11.360buyimg.com/n1/s450x450_jfs/t1/106460/12/24880/106509/62286b66E8a7c90f3/6233c638c35c71fc.jpg'
      },
      {
        cid: 2,
        mark: 'white',
        title: '星光色',
        img: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/137220/19/22769/33983/6231aef3E11b2bdb8/137510330b385962.jpg'
      },
      {
        cid: 3,
        mark: 'blue',
        title: '蓝色',
        img: 'https://img14.360buyimg.com/n1/s450x450_jfs/t1/216662/8/14146/130257/62286b0dE9672aa78/edb22fd36dfd0481.jpg'
      },
      {
        cid: 4,
        mark: 'green',
        title: '绿色',
        img: 'https://img10.360buyimg.com/n1/s450x450_jfs/t1/96695/38/24927/57026/6227cd74E0c8b97bb/742053eca7d7f4ed.jpg'
      }
    ],
    version: [
      {
        vid: 1,
        mark: '128',
        title: '128GB',
        price:5999
      },
      {
        vid: 2,
        mark: '256',
        title: '256GB',
        price:6799
      },
      {
        vid: 3,
        mark: '512',
        title: '512GB',
        price:8399
      }
    ]
  },
  {
    id: 4,
    name: 'IPhone 13 Pro Max',
    limit: 2,
    color: [
      {
        cid: 1,
        mark: 'black',
        title: '石墨色',
        img: 'https://img10.360buyimg.com/n1/s450x450_jfs/t1/212909/16/15007/33733/6231b416E99e7622f/3531d58dd21fafc1.jpg'
      },
      {
        cid: 2,
        mark: 'white',
        title: '银色',
        img: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/96033/4/24899/35732/6231b3c5E7a725ed3/b6202519ee6ad917.jpg'
      },
      {
        cid: 3,
        mark: 'blue',
        title: '蓝色',
        img: 'https://img13.360buyimg.com/n1/s450x450_jfs/t1/111899/20/25621/37235/6231b3a0Ef79b8f01/b59706fd5e43e196.jpg'
      },
      {
        cid: 4,
        mark: 'green',
        title: '苍岭绿色',
        img: 'https://img12.360buyimg.com/n1/s450x450_jfs/t1/100108/18/24763/35565/6227cde3E763ca4aa/f0c4d8142f0ca6f3.jpg'
      }
    ],
    version: [
      {
        vid: 1,
        mark: '128',
        title: '128GB',
        price:7999
      },
      {
        vid: 2,
        mark: '256',
        title: '256GB',
        price:8799
      },
      {
        vid: 3,
        mark: '512',
        title: '512GB',
        price:10399
      },
      {
        vid: 4,
        mark: '1024',
        title: '1TB',
        price:11999
      }
    ]
  }
];
