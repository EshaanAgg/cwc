"use client";

import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 700,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function TransitionsModal({
	questionId,
	open,
	handleClose,
}: {
	questionId: number;
	open: boolean;
	handleClose: () => void;
}) {
	return (
		<div>
			<ToastContainer limit={2} />
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}>
				<Fade in={open}>
					<Box sx={style}>
						<QuestionContent que={questions[questionId - 1]}></QuestionContent>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}

function QuestionContent({ que }: { que: any }) {
	const [userAnswer, setUserAnswer] = useState("");

	const checkAnswer = () => {
		console.log(userAnswer);
		if (userAnswer.toLowerCase() === que.answer.toLowerCase()) toast.success("That's correct!");
		else toast.error("That's not right.");
	};

	return (
		<div>
			<h1>{que.name}</h1>
			<Accordion className="m-2">
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header">
					<Typography>
						<h4>Problem Description</h4>
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>{que.description}</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion className="m-2">
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header">
					<Typography>
						<h4>Resources</h4>
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					{que.resourceURL.length == 0
						? "There are no resources required to solve this problem."
						: que.resourceURL.map((res: any) => {
								return (
									<div>
										<h3>{res.name}:-</h3>
										<a href={res.url}>Click Me</a>
									</div>
								);
						  })}
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel3a-content"
					id="panel3a-header">
					<Typography>
						<h4>Answer</h4>
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<TextField
						id="outlined-password-input"
						label="Answer"
						type="text"
						value={userAnswer}
						onChange={(e) => setUserAnswer(e.target.value)}
					/>
					<br />
					<br />
					<Button variant="contained" onClick={checkAnswer}>
						Submit
					</Button>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

const questions = [
	{
		id: 1,
		name: "Who is the lier?",
		area: "Phising",
		description: "You have recieved an overwhelming number of messages today. Do they look safe?",
		question: "Return the name user whom can't be trusted.",
		resourceURL: [
			{
				name: "Messages",
				url: "https://message-in34lm6u3-vcvedika.vercel.app/",
			},
		],
		answer: "FLIPKART",
	},
	{
		id: 2,
		name: "Best Calculator",
		area: "App Malware",
		description:
			"You have heard a lot of praises about this recently released calculator. Let's install it!",
		question:
			"Which of these permissions should not be provided? Reply None if all looks safe to you. ",
		resourceURL: [
			{
				name: "Permissions",
				url: "https://carousel-seven-eta.vercel.app/",
			},
		],
		answer: "calls",
	},
	{
		id: 3,
		name: "Caas (Curl as a Service)",
		area: "App Malware",
		description: `The products team has decided to release a new product "CaaS" and they believe that the same would generate drastic revenues for your team! Imagine being able to run CURL commands right from your phone!

You realise this is absurd, and after browsing the source code you realise this project is not really a good idea with the current implementation. You tell the same to your manager, but he isn't ready to listen. Maybe if you sent him his login password, he would listen?
`,
		question: "What is the password? ",
		resourceURL: [
			{
				name: "Service",
				url: "https://cwc-caas.up.railway.app/",
			},
			{
				name: "Source Code",
				url: "https://drive.google.com/file/d/1SeWVe8bYEcr5IRfh70zwJ_4KWmHMqMtS/view?usp=sharing",
			},
		],
		answer: "ThisIsDefinitelyNotAGoodPassword",
	},
];
