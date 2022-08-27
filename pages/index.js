import Head from "next/head";
import Form from "@ui/Form";
import Header from "@ui/Header";
import DomainList from "@ui/DomainList";
import SocialBar from "@ui/SocialBar";

export default function Home() {
	return (
		<>
			<Head>
				<title>Domiane</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="text-zinc-100 conatiner mx-auto px-4 md:px-32">
				<Header />
				<Form />
				<DomainList />
			</div>
			<SocialBar />
		</>
	);
}
