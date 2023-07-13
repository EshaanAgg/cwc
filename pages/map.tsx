"use client";

import React, { useState } from "react";
import type { CountryContext } from "react-svg-worldmap";
import WorldMap from "react-svg-worldmap";
import QuestionModal from "../src/QuestionModal";

const redCount = ["CN", "IN", "US", "ID"];
const blueCount = ["PK", "BR", "NG", "BG"];

const getColor = (cc: string) => {
	if (redCount.includes(cc.toUpperCase())) return "red";
	else if (blueCount.includes(cc.toUpperCase())) return "blue";
	return "black";
};
const getStyle = ({ countryValue, countryCode, minValue, maxValue, color }: CountryContext) => ({
	fill: getColor(countryCode),
	fillOpacity: countryValue ? 0.7 : 0,
	stroke: "white",
	strokeWidth: 1,
	strokeOpacity: 0.3,
	cursor: "pointer",
});

const Map = (props: any) => {
	const data = [
		{ country: "cn", value: 1389618778 }, // China
		{ country: "in", value: 1311559204 }, // India
		{ country: "us", value: 331883986 }, // United States
		{ country: "id", value: 264935824 }, // Indonesia
		{ country: "pk", value: 210797836 }, // Pakistan
		{ country: "br", value: 210301591 }, // Brazil
		{ country: "ng", value: 208679114 }, // Nigeria
		{ country: "bd", value: 161062905 }, // Bangladesh
		{ country: "ru", value: 141944641 }, // Russia
		{ country: "mx", value: 127318112 }, // Mexico
	];

	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(false);
	const [id, setId] = useState(0);

	const handleClickOnCountry = ({ countryCode }: { countryCode: string }) => {
		if (!redCount.includes(countryCode) && !blueCount.includes(countryCode)) return;
		var id;
		if (redCount.includes(countryCode)) id = 3;
		else {
			id = (blueCount.findIndex((cc) => cc == countryCode) % 2) + 1;
		}
		setId(id);
		if (redCount.includes(countryCode)) setOpen(true);
		else if (blueCount.includes(countryCode)) setOpen(true);
	};

	return (
		<div className="mapMain">
			<WorldMap
				backgroundColor="black"
				borderColor="#ffffff"
				color="red"
				tooltipBgColor="#000000"
				title="Custom Styles Map"
				size="xxl"
				valueSuffix="points"
				data={data}
				frame
				styleFunction={getStyle}
				onClickFunction={handleClickOnCountry}
			/>
			<QuestionModal open={open} handleClose={handleClose} questionId={id} />
		</div>
	);
};

export default Map;
