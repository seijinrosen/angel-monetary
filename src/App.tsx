import { Box, Button, Container, Link } from "@mui/material";
import { useState } from "react";
import Footer from "./components/Footer";
import Masu from "./components/Masu";

const getTonari = (id: number): number[] => {
	switch (id) {
		case 1:
			return [2, 5, 9];
		case 2:
			return [1, 3, 5, 6];
		case 3:
			return [2, 4, 6, 7, 8];
		case 4:
			return [3, 8, 14];
		case 5:
			return [1, 2, 6, 9, 10];
		case 6:
			return [2, 3, 5, 7, 10, 11, 12];
		case 7:
			return [3, 6, 8, 12];
		case 8:
			return [3, 4, 7, 12, 13, 14];
		case 9:
			return [1, 5, 10, 15];
		case 10:
			return [5, 6, 9, 11, 15, 16, 17];
		case 11:
			return [6, 10, 12, 17];
		case 12:
			return [6, 7, 8, 11, 13, 17, 18, 19];
		case 13:
			return [8, 12, 14, 19];
		case 14:
			return [4, 8, 13, 19];
		case 15:
			return [9, 10, 16];
		case 16:
			return [10, 15, 17];
		case 17:
			return [10, 11, 12, 16, 18];
		case 18:
			return [12, 17, 19];
		case 19:
			return [12, 13, 14, 18];
		default:
			return [];
	}
};

const convertCoin = (id: number, coin: number): number => {
	switch (id) {
		case 1:
			return coin * 2;
		case 2:
			return coin + 1;
		case 3:
			return coin + 4;
		case 4:
			return coin;
		case 5:
			return coin + 3;
		case 6:
			return coin + 10;
		case 7:
			return coin + 1;
		case 8:
			return coin * 2;
		case 9:
			return coin + 3;
		case 10:
			return coin + 5;
		case 11:
			return coin + 1;
		case 12:
			return 0;
		case 13:
			return coin + 1;
		case 14:
			return coin + 3;
		case 15:
			return coin;
		case 16:
			return coin + 2;
		case 17:
			return coin * 2;
		case 18:
			return coin + 1;
		case 19:
			return coin + 20;
		default:
			return coin;
	}
};

const getBgColor = (ending: string) => {
	if (ending === "デッドエンド") return "red";
	if (ending === "行き止まりエンド") return "gray";
	if (ending === "おしまエンド") return "lightgreen";
};

function App() {
	const [coin, setCoin] = useState(0);
	const [ikeruMasuIds, setIkeruMasuIds] = useState([15]);
	const [toottaMasuIds, setToottaMasuIds] = useState<number[]>([]);
	const [cursed, setCursed] = useState(true);
	const [ending, setEnding] = useState("");

	const reset = () => {
		setCoin(0);
		setIkeruMasuIds([15]);
		setToottaMasuIds([]);
		setCursed(true);
		setEnding("");
	};

	const handleClick = (id: number) => {
		if (id === 4) {
			setEnding(cursed ? "デッドエンド" : "おしまエンド");
			setIkeruMasuIds([]);
			return;
		}
		if (id === 12) setCursed(false);
		setCoin(convertCoin(id, coin));
		const newToottaMasuIds = [...toottaMasuIds, id];
		setToottaMasuIds(newToottaMasuIds);
		const newIkeruMasuIds = getTonari(id).filter(
			(v) => !newToottaMasuIds.includes(v),
		);
		setIkeruMasuIds(newIkeruMasuIds);
		if (!newIkeruMasuIds.length) setEnding("行き止まりエンド");
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
			}}
		>
			<Container component="main" maxWidth="sm">
				<h1>エンゼルマネタリー</h1>
				<p>現在のコイン枚数：{coin}</p>
				<Box
					position="relative"
					height={500}
					mb={1}
					sx={{ backgroundColor: getBgColor(ending) }}
				>
					<Masu
						id={1}
						text="ミカエルの祝福 ×2"
						tootta={toottaMasuIds.includes(1)}
						disabled={!ikeruMasuIds.includes(1)}
						onClick={() => handleClick(1)}
						width="25%"
						height="33%"
						zIndex={49}
						pb={12}
					/>
					<Masu
						id={2}
						text="+1"
						tootta={toottaMasuIds.includes(2)}
						disabled={!ikeruMasuIds.includes(2)}
						onClick={() => handleClick(2)}
						width="25%"
						height="30%"
						left="25%"
						pb={10}
						pl={5}
					/>
					<Masu
						id={3}
						text="+4"
						tootta={toottaMasuIds.includes(3)}
						disabled={!ikeruMasuIds.includes(3)}
						onClick={() => handleClick(3)}
						width="25%"
						height="25%"
						zIndex={48}
						left="50%"
					/>
					<Masu
						id={4}
						text="GOAL 解呪されていないと死亡"
						tootta={toottaMasuIds.includes(4)}
						disabled={!ikeruMasuIds.includes(4)}
						onClick={() => handleClick(4)}
						width="25%"
						height="33%"
						zIndex={46}
						right="0"
						pr={2}
						pb={5}
						pl={2}
					/>
					<Masu
						id={5}
						text="+3"
						tootta={toottaMasuIds.includes(5)}
						disabled={!ikeruMasuIds.includes(5)}
						onClick={() => handleClick(5)}
						width="25%"
						height="33%"
						zIndex={48}
						top="10%"
						left="10%"
						pt={11}
						pl={5}
					/>
					<Masu
						id={6}
						text="+10"
						tootta={toottaMasuIds.includes(6)}
						disabled={!ikeruMasuIds.includes(6)}
						onClick={() => handleClick(6)}
						width="25%"
						height="30%"
						zIndex={49}
						top="22%"
						left="33%"
					/>
					<Masu
						id={7}
						text="+1"
						tootta={toottaMasuIds.includes(7)}
						disabled={!ikeruMasuIds.includes(7)}
						onClick={() => handleClick(7)}
						width="10%"
						height="25%"
						top="25%"
						right="33%"
					/>
					<Masu
						id={8}
						text="ガブリエルの祝福 ×2"
						tootta={toottaMasuIds.includes(8)}
						disabled={!ikeruMasuIds.includes(8)}
						onClick={() => handleClick(8)}
						width="25%"
						height="35%"
						zIndex={47}
						top="20%"
						right="10%"
						pr={3}
						pl={3}
					/>
					<Masu
						id={9}
						text="+3"
						tootta={toottaMasuIds.includes(9)}
						disabled={!ikeruMasuIds.includes(9)}
						onClick={() => handleClick(9)}
						width="20%"
						height="35%"
						top="33%"
					/>
					<Masu
						id={10}
						text="+5"
						tootta={toottaMasuIds.includes(10)}
						disabled={!ikeruMasuIds.includes(10)}
						onClick={() => handleClick(10)}
						width="20%"
						height="30%"
						zIndex={52}
						top="40%"
						left="20%"
					/>
					<Masu
						id={11}
						text="+1"
						tootta={toottaMasuIds.includes(11)}
						disabled={!ikeruMasuIds.includes(11)}
						onClick={() => handleClick(11)}
						width="10%"
						height="15%"
						top="50%"
						left="40%"
					/>
					<Masu
						id={12}
						text="ウリエルの解呪 コインが0枚になる"
						tootta={toottaMasuIds.includes(12)}
						disabled={!ikeruMasuIds.includes(12)}
						onClick={() => handleClick(12)}
						width="25%"
						height="30%"
						zIndex={50}
						top="50%"
						left="50%"
						pb={8}
					/>
					<Masu
						id={13}
						text="+1"
						tootta={toottaMasuIds.includes(13)}
						disabled={!ikeruMasuIds.includes(13)}
						onClick={() => handleClick(13)}
						width="11%"
						height="20%"
						zIndex={45}
						top="55%"
						left="75%"
						pr={2}
						pb={2}
					/>
					<Masu
						id={14}
						text="+3"
						tootta={toottaMasuIds.includes(14)}
						disabled={!ikeruMasuIds.includes(14)}
						onClick={() => handleClick(14)}
						width="19%"
						height="33%"
						zIndex={46}
						top="33%"
						right="0"
						pt={13}
						pl={3}
					/>
					<Masu
						id={15}
						text="START コインを多く集めろ！"
						tootta={toottaMasuIds.includes(15)}
						disabled={!ikeruMasuIds.includes(15)}
						onClick={() => handleClick(15)}
						width="25%"
						height="32%"
						zIndex={53}
						bottom="0"
						pr={2}
						pl={2}
					/>
					<Masu
						id={16}
						text="+2"
						tootta={toottaMasuIds.includes(16)}
						disabled={!ikeruMasuIds.includes(16)}
						onClick={() => handleClick(16)}
						width="10%"
						height="30%"
						bottom="0"
						left="25%"
					/>
					<Masu
						id={17}
						text="ラファエルの祝福 ×2"
						tootta={toottaMasuIds.includes(17)}
						disabled={!ikeruMasuIds.includes(17)}
						onClick={() => handleClick(17)}
						width="25%"
						height="35%"
						zIndex={51}
						bottom="0"
						left="35%"
						pr={2}
						pl={2}
					/>
					<Masu
						id={18}
						text="+1"
						tootta={toottaMasuIds.includes(18)}
						disabled={!ikeruMasuIds.includes(18)}
						onClick={() => handleClick(18)}
						width="10%"
						height="20%"
						zIndex={48}
						bottom="0"
						left="60%"
					/>
					<Masu
						id={19}
						text="+20 ニャー"
						tootta={toottaMasuIds.includes(19)}
						disabled={!ikeruMasuIds.includes(19)}
						onClick={() => handleClick(19)}
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
				<p>
					<Button variant="outlined" onClick={reset}>
						リセット
					</Button>
				</p>
				{ending && <p>{ending}</p>}
				{ending && 151 <= coin && (
					<p>
						おめでとうございます！おそらく151枚がMAXです。それ以上のスコアを出した方がいらっしゃいましたらご連絡ください。
					</p>
				)}
				<Box mt={5} mb={3}>
					このゲームは、
					<Link
						href="http://stst.cocot.jp/"
						target="_blank"
						rel="noopener noreferrer"
					>
						ステッパーズ・ストップ
					</Link>
					のポーンさん（
					<Link
						href="https://twitter.com/pawwn"
						target="_blank"
						rel="noopener noreferrer"
					>
						@pawwn
					</Link>
					）の
					<Link
						href="https://twitter.com/pawwn/status/936229335949746176"
						target="_blank"
						rel="noopener noreferrer"
					>
						このツイート
					</Link>
					をもとに作られました。
				</Box>
			</Container>
			<Footer />
		</Box>
	);
}

export default App;
