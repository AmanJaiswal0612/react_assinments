import { Details } from "./Details";
import { Logo, Wrapper } from "./Wrapper.styled";

export const CreditCard = ({ data, fsubmit }) => {
  if (fsubmit) {
    console.log(data);
  }

  return (
    <Wrapper>
      <Logo
        mleft="13rem"
        height="20px"
        width="80px"
        src="https://tse1.mm.bing.net/th/id/OIP.p_mGbhfEsoDKLAd1D9Jm6gHaCt?pid=ImgDet&rs=1"
      />
      <Logo
        mleft="40px"
        height="40px"
        width="80px"
        src="https://th.bing.com/th/id/R.85763459af4e43bad9941ab8e8252311?rik=Qil8hzKPANdSDg&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2f7%2f8%2f1%2fb%2f1194983790162955575sim_borja_bravo_01.svg.thumb.png&ehk=dmG65FJj%2bS0VlaHDjegZrGHayWuKAO4rsY7tjUf0TOk%3d&risl=&pid=ImgRaw&r=0"
      />
      <Details data={data} fsubmit={fsubmit} />
    </Wrapper>
  );
};
