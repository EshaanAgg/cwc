"use client";

import React, { useState } from "react";
import type { CountryContext } from "react-svg-worldmap";
import WorldMap from "react-svg-worldmap";
import QuestionModal from "../src/QuestionModal";

const redCount = ["CN", "IN", "US", "ID"];
const blueCount = ["PK", "BR", "NG", "BG"];

const getColor = (cc: string) => {
	if (redCount.includes(cc)) return "red";
	else if (blueCount.includes(cc)) return "blue";
	return "black";
};
const getStyle = ({ countryValue, countryCode, minValue, maxValue, color }: CountryContext) => ({
	fill: getColor(countryCode),
	fillOpacity: countryValue ? 0.7 : 0.4,
	stroke: "black",
	strokeWidth: 1,
	strokeOpacity: 0.3,
	cursor: "pointer",
});

const Map = (props: any) => {
	const data = [
		{ country: "AF" },
		{ country: "AL" },
		{ country: "DZ" },
		{ country: "AS" },
		{ country: "AD" },
		{ country: "AO" },
		{ country: "AI" },
		{ country: "AQ" },
		{ country: "AG" },
		{ country: "AR" },
		{ country: "AM" },
		{ country: "AW" },
		{ country: "AU" },
		{ country: "AT" },
		{ country: "AZ" },
		{ country: "BS" },
		{ country: "BH" },
		{ country: "BD" },
		{ country: "BB" },
		{ country: "BY" },
		{ country: "BE" },
		{ country: "BZ" },
		{ country: "BJ" },
		{ country: "BM" },
		{ country: "BT" },
		{ country: "BO" },
		{ country: "BQ" },
		{ country: "BA" },
		{ country: "BW" },
		{ country: "BV" },
		{ country: "BR" },
		{ country: "IO" },
		{ country: "BN" },
		{ country: "BG" },
		{ country: "BF" },
		{ country: "BI" },
		{ country: "CV" },
		{ country: "KH" },
		{ country: "CM" },
		{ country: "CA" },
		{ country: "KY" },
		{ country: "CF" },
		{ country: "TD" },
		{ country: "CL" },
		{ country: "CN" },
		{ country: "CX" },
		{ country: "CC" },
		{ country: "CO" },
		{ country: "KM" },
		{ country: "CD" },
		{ country: "CG" },
		{ country: "CK" },
		{ country: "CR" },
		{ country: "HR" },
		{ country: "CU" },
		{ country: "CW" },
		{ country: "CY" },
		{ country: "CZ" },
		{ country: "CI" },
		{ country: "DK" },
		{ country: "DJ" },
		{ country: "DM" },
		{ country: "DO" },
		{ country: "EC" },
		{ country: "EG" },
		{ country: "SV" },
		{ country: "GQ" },
		{ country: "ER" },
		{ country: "EE" },
		{ country: "SZ" },
		{ country: "ET" },
		{ country: "FK" },
		{ country: "FO" },
		{ country: "FJ" },
		{ country: "FI" },
		{ country: "FR" },
		{ country: "GF" },
		{ country: "PF" },
		{ country: "TF" },
		{ country: "GA" },
		{ country: "GM" },
		{ country: "GE" },
		{ country: "DE" },
		{ country: "GH" },
		{ country: "GI" },
		{ country: "GR" },
		{ country: "GL" },
		{ country: "GD" },
		{ country: "GP" },
		{ country: "GU" },
		{ country: "GT" },
		{ country: "GG" },
		{ country: "GN" },
		{ country: "GW" },
		{ country: "GY" },
		{ country: "HT" },
		{ country: "HM" },
		{ country: "VA" },
		{ country: "HN" },
		{ country: "HK" },
		{ country: "HU" },
		{ country: "IS" },
		{ country: "IN" },
		{ country: "ID" },
		{ country: "IR" },
		{ country: "IQ" },
		{ country: "IE" },
		{ country: "IM" },
		{ country: "IL" },
		{ country: "IT" },
		{ country: "JM" },
		{ country: "JP" },
		{ country: "JE" },
		{ country: "JO" },
		{ country: "KZ" },
		{ country: "KE" },
		{ country: "KI" },
		{ country: "KP" },
		{ country: "KR" },
		{ country: "KW" },
		{ country: "KG" },
		{ country: "LA" },
		{ country: "LV" },
		{ country: "LB" },
		{ country: "LS" },
		{ country: "LR" },
		{ country: "LY" },
		{ country: "LI" },
		{ country: "LT" },
		{ country: "LU" },
		{ country: "MO" },
		{ country: "MG" },
		{ country: "MW" },
		{ country: "MY" },
		{ country: "MV" },
		{ country: "ML" },
		{ country: "MT" },
		{ country: "MH" },
		{ country: "MQ" },
		{ country: "MR" },
		{ country: "MU" },
		{ country: "YT" },
		{ country: "MX" },
		{ country: "FM" },
		{ country: "MD" },
		{ country: "MC" },
		{ country: "MN" },
		{ country: "ME" },
		{ country: "MS" },
		{ country: "MA" },
		{ country: "MZ" },
		{ country: "MM" },
		{ country: "NA" },
		{ country: "NR" },
		{ country: "NP" },
		{ country: "NL" },
		{ country: "NC" },
		{ country: "NZ" },
		{ country: "NI" },
		{ country: "NE" },
		{ country: "NG" },
		{ country: "NU" },
		{ country: "NF" },
		{ country: "MP" },
		{ country: "NO" },
		{ country: "OM" },
		{ country: "PK" },
		{ country: "PW" },
		{ country: "PS" },
		{ country: "PA" },
		{ country: "PG" },
		{ country: "PY" },
		{ country: "PE" },
		{ country: "PH" },
		{ country: "PN" },
		{ country: "PL" },
		{ country: "PT" },
		{ country: "PR" },
		{ country: "QA" },
		{ country: "MK" },
		{ country: "RO" },
		{ country: "RU" },
		{ country: "RW" },
		{ country: "RE" },
		{ country: "BL" },
		{ country: "SH" },
		{ country: "KN" },
		{ country: "LC" },
		{ country: "MF" },
		{ country: "PM" },
		{ country: "VC" },
		{ country: "WS" },
		{ country: "SM" },
		{ country: "ST" },
		{ country: "SA" },
		{ country: "SN" },
		{ country: "RS" },
		{ country: "SC" },
		{ country: "SL" },
		{ country: "SG" },
		{ country: "SX" },
		{ country: "SK" },
		{ country: "SI" },
		{ country: "SB" },
		{ country: "SO" },
		{ country: "ZA" },
		{ country: "GS" },
		{ country: "SS" },
		{ country: "ES" },
		{ country: "LK" },
		{ country: "SD" },
		{ country: "SR" },
		{ country: "SJ" },
		{ country: "SE" },
		{ country: "CH" },
		{ country: "SY" },
		{ country: "TW" },
		{ country: "TJ" },
		{ country: "TZ" },
		{ country: "TH" },
		{ country: "TL" },
		{ country: "TG" },
		{ country: "TK" },
		{ country: "TO" },
		{ country: "TT" },
		{ country: "TN" },
		{ country: "TR" },
		{ country: "TM" },
		{ country: "TC" },
		{ country: "TV" },
		{ country: "UG" },
		{ country: "UA" },
		{ country: "AE" },
		{ country: "GB" },
		{ country: "UM" },
		{ country: "US" },
		{ country: "UY" },
		{ country: "UZ" },
		{ country: "VU" },
		{ country: "VE" },
		{ country: "VN" },
		{ country: "VG" },
		{ country: "VI" },
		{ country: "WF" },
		{ country: "EH" },
		{ country: "YE" },
		{ country: "ZM" },
		{ country: "ZW" },
		{ country: "AX" },
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
			<div className="title">
				Choose a country to save
				<div className="legend">
					<div className="l1">
						<div className="box1"></div>
						<div className="txt">Advanced</div>
					</div>
					<div className="l1">
						<div className="box2"></div>
						<div className="txt">Beginner</div>
					</div>
				</div>
			</div>
			<WorldMap
				opacity="50"
				tooltipBgColor="#000000"
				size="xxl"
				valueSuffix="points"
				data={data}
				styleFunction={getStyle}
				onClickFunction={handleClickOnCountry}
				className="world"
			/>
			<QuestionModal open={open} handleClose={handleClose} questionId={id} />
		</div>
	);
};

export default Map;
