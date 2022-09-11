import { Box, Container } from "@mui/material";
import Masu from "./components/Masu";

function App() {
  return (
    <Container component="main" maxWidth="sm">
      <h1>エンゼルマネタリー</h1>
      <Box position="relative" height={500} mb={1}>
        <Masu
          id={1}
          text="A ミカエルの祝福 *2"
          width="25%"
          height="33%"
          zIndex={49}
        />
        <Masu
          id={2}
          text="B コイン1枚"
          width="25%"
          height="30%"
          left="25%"
          pb={15}
        />
        <Masu
          id={3}
          text="C コイン4枚"
          width="25%"
          height="25%"
          zIndex={48}
          left="50%"
        />
        <Masu
          id={4}
          text="D GOAL 解呪されていないと死亡"
          width="25%"
          height="33%"
          zIndex={46}
          right="0"
          pb={10}
        />
        <Masu
          id={5}
          text="E コイン 3枚"
          width="25%"
          height="33%"
          zIndex={48}
          top="10%"
          left="10%"
          pt={15}
        />
        <Masu
          id={6}
          text="F コイン10枚"
          width="25%"
          height="30%"
          zIndex={49}
          top="22%"
          left="33%"
        />
        <Masu
          id={7}
          text="G コイン1枚"
          width="10%"
          height="25%"
          top="25%"
          right="33%"
        />
        <Masu
          id={8}
          text="H ガブリエルの祝福 *2"
          width="25%"
          height="35%"
          zIndex={47}
          top="20%"
          right="10%"
        />
        <Masu id={9} text="I コイン3枚" width="20%" height="35%" top="33%" />
        <Masu
          id={10}
          text="J コイン5枚"
          width="20%"
          height="30%"
          zIndex={52}
          top="40%"
          left="20%"
        />
        <Masu
          id={11}
          text="K コイン1枚"
          width="10%"
          height="15%"
          top="50%"
          left="40%"
        />
        <Masu
          id={12}
          text="L ウリエルの解呪 コインが0枚になる"
          width="25%"
          height="30%"
          zIndex={50}
          top="50%"
          left="50%"
          pb={10}
        />
        <Masu
          id={13}
          text="M コイン1枚"
          width="11%"
          height="20%"
          zIndex={45}
          top="55%"
          left="75%"
        />
        <Masu
          id={14}
          text="N コイン3枚"
          width="19%"
          height="33%"
          zIndex={46}
          top="33%"
          right="0"
          pt={15}
        />
        <Masu
          id={15}
          text="O START コインを多く集めろ！"
          width="25%"
          height="32%"
          zIndex={53}
          bottom="0"
        />
        <Masu
          id={16}
          text="P コイン2枚"
          width="10%"
          height="30%"
          bottom="0"
          left="25%"
        />
        <Masu
          id={17}
          text="Q ラファエルの祝福 *2"
          width="25%"
          height="35%"
          zIndex={51}
          bottom="0"
          left="35%"
        />
        <Masu
          id={18}
          text="R コイン1枚"
          width="10%"
          height="20%"
          zIndex={48}
          bottom="0"
          left="60%"
        />
        <Masu
          id={19}
          text="S コイン20枚 ニャー"
          width="30%"
          height="34%"
          zIndex={49}
          right="0"
          bottom="0"
          pt={10}
        />
      </Box>
      ・隣のスペースに行ける
      <br />
      ・同じスペースは通れない
    </Container>
  );
}

export default App;
