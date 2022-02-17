type experienceType = {
    title: string;
    period: string;
    position: string;
    projects: string;
    projectDescription: projectType[];
};

type projectType = {
    title: string;
    stack: string;
    describe: { main: string; sub?: string[] }[];
};

//프로젝트 경력
const projectList: projectType[] = [
    {
        title: 'PlayDapp MarketPLAce (Eth, Polygon)',
        stack: 'JavaScript, React, Redux, react-router, react-query, scss, web3-react',
        describe: [
            { main: '마켓 플레이스 신규 기능 개발 (MakeOffer, Bundle, Auction, Transfer)', sub: [] },
            {
                main: '지갑 추가 확장성 강화를 위해, web3-react 도입',
                sub: ['web3-react 지원 connector 활용 지갑 연동 지원 (CoinBase, Trust Wallet 추가)'],
            },
        ],
    },
];

// 경력
const experiences: experienceType[] = [
    {
        title: 'SuperTree',
        period: '2020.10 - current',
        position: 'MarketPLAce Frontend Engineer, Service Platform Team',
        projects: 'PlayDapp MarketPLAce (Ethereum ver, Polygon ver)',
        projectDescription: [...projectList],
    },
];

// 연락 방식
const contractInfo = [
    { title: 'Github', link: '' },
    { title: 'Mail', link: '' },
    { title: 'Kakao', link: '' },
];

export default {
    experiences,
    contractInfo,
};
