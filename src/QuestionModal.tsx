import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
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

function QuestionContent({ que }) {
	const [userAnswer, setUserAnswer] = useState("");

	const checkAnswer = () => {
		if (userAnswer.toLowerCase() === que.answer.toLowerCase()) toast.sucess("That's correct!");
		else toast.error("That's not right.");
	};

	return (
		<div>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header">
					<Typography>Problem Description</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>{que.description}</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header">
					<Typography>Resources</Typography>
				</AccordionSummary>
				<AccordionDetails>
					{que.resourceURL.length == 0
						? "There are no resources required to solve this problem."
						: que.resourceURL.map((res) => {
								return (
									<div>
										<h3>{res.name}</h3>
										<Typography>
											<a href={res.url}>Click Me</a>
										</Typography>
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
					<Typography>Question</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<TextField
						id="outlined-password-input"
						label="Answer"
						type="text"
						value="userAnswer"
						onChange={setUserAnswer(e.target.value)}
					/>
					<Button variant="text" onClick={checkAnswer}>
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
];
