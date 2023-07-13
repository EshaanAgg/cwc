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

const getLocalizedText = ({
	countryCode,
	countryValue,
	prefix,
	suffix,
  }: CountryContext) =>
	countryCode.toString();



const Map = (props: any) => {
	const data = [
		{ country: "AF" , value: 0},
		{ country: "AL" , value: 0},
		{ country: "DZ" , value: 0},
		{ country: "AS" , value: 0},
		{ country: "AD" , value: 0},
		{ country: "AO" , value: 0},
		{ country: "AI" , value: 0},
		{ country: "AQ" , value: 0},
		{ country: "AG" , value: 0},
		{ country: "AR" , value: 0},
		{ country: "AM" , value: 0},
		{ country: "AW" , value: 0},
		{ country: "AU" , value: 0},
		{ country: "AT" , value: 0},
		{ country: "AZ" , value: 0},
		{ country: "BS" , value: 0},
		{ country: "BH" , value: 0},
		{ country: "BD" , value: 0},
		{ country: "BB" , value: 0},
		{ country: "BY" , value: 0},
		{ country: "BE" , value: 0},
		{ country: "BZ" , value: 0},
		{ country: "BJ" , value: 0},
		{ country: "BM" , value: 0},
		{ country: "BT" , value: 0},
		{ country: "BO" , value: 0},
		{ country: "BQ" , value: 0},
		{ country: "BA" , value: 0},
		{ country: "BW" , value: 0},
		{ country: "BV" , value: 0},
		{ country: "BR" , value: 0},
		{ country: "IO" , value: 0},
		{ country: "BN" , value: 0},
		{ country: "BG" , value: 0},
		{ country: "BF" , value: 0},
		{ country: "BI" , value: 0},
		{ country: "CV" , value: 0},
		{ country: "KH" , value: 0},
		{ country: "CM" , value: 0},
		{ country: "CA" , value: 0},
		{ country: "KY" , value: 0},
		{ country: "CF" , value: 0},
		{ country: "TD" , value: 0},
		{ country: "CL" , value: 0},
		{ country: "CN" , value: 0},
		{ country: "CX" , value: 0},
		{ country: "CC" , value: 0},
		{ country: "CO" , value: 0},
		{ country: "KM" , value: 0},
		{ country: "CD" , value: 0},
		{ country: "CG" , value: 0},
		{ country: "CK" , value: 0},
		{ country: "CR" , value: 0},
		{ country: "HR" , value: 0},
		{ country: "CU" , value: 0},
		{ country: "CW" , value: 0},
		{ country: "CY" , value: 0},
		{ country: "CZ" , value: 0},
		{ country: "CI" , value: 0},
		{ country: "DK" , value: 0},
		{ country: "DJ" , value: 0},
		{ country: "DM" , value: 0},
		{ country: "DO" , value: 0},
		{ country: "EC" , value: 0},
		{ country: "EG" , value: 0},
		{ country: "SV" , value: 0},
		{ country: "GQ" , value: 0},
		{ country: "ER" , value: 0},
		{ country: "EE" , value: 0},
		{ country: "SZ" , value: 0},
		{ country: "ET" , value: 0},
		{ country: "FK" , value: 0},
		{ country: "FO" , value: 0},
		{ country: "FJ" , value: 0},
		{ country: "FI" , value: 0},
		{ country: "FR" , value: 0},
		{ country: "GF" , value: 0},
		{ country: "PF" , value: 0},
		{ country: "TF" , value: 0},
		{ country: "GA" , value: 0},
		{ country: "GM" , value: 0},
		{ country: "GE" , value: 0},
		{ country: "DE" , value: 0},
		{ country: "GH" , value: 0},
		{ country: "GI" , value: 0},
		{ country: "GR" , value: 0},
		{ country: "GL" , value: 0},
		{ country: "GD" , value: 0},
		{ country: "GP" , value: 0},
		{ country: "GU" , value: 0},
		{ country: "GT" , value: 0},
		{ country: "GG" , value: 0},
		{ country: "GN" , value: 0},
		{ country: "GW" , value: 0},
		{ country: "GY" , value: 0},
		{ country: "HT" , value: 0},
		{ country: "HM" , value: 0},
		{ country: "VA" , value: 0},
		{ country: "HN" , value: 0},
		{ country: "HK" , value: 0},
		{ country: "HU" , value: 0},
		{ country: "IS" , value: 0},
		{ country: "IN" , value: 0},
		{ country: "ID" , value: 0},
		{ country: "IR" , value: 0},
		{ country: "IQ" , value: 0},
		{ country: "IE" , value: 0},
		{ country: "IM" , value: 0},
		{ country: "IL" , value: 0},
		{ country: "IT" , value: 0},
		{ country: "JM" , value: 0},
		{ country: "JP" , value: 0},
		{ country: "JE" , value: 0},
		{ country: "JO" , value: 0},
		{ country: "KZ" , value: 0},
		{ country: "KE" , value: 0},
		{ country: "KI" , value: 0},
		{ country: "KP" , value: 0},
		{ country: "KR" , value: 0},
		{ country: "KW" , value: 0},
		{ country: "KG" , value: 0},
		{ country: "LA" , value: 0},
		{ country: "LV" , value: 0},
		{ country: "LB" , value: 0},
		{ country: "LS" , value: 0},
		{ country: "LR" , value: 0},
		{ country: "LY" , value: 0},
		{ country: "LI" , value: 0},
		{ country: "LT" , value: 0},
		{ country: "LU" , value: 0},
		{ country: "MO" , value: 0},
		{ country: "MG" , value: 0},
		{ country: "MW" , value: 0},
		{ country: "MY" , value: 0},
		{ country: "MV" , value: 0},
		{ country: "ML" , value: 0},
		{ country: "MT" , value: 0},
		{ country: "MH" , value: 0},
		{ country: "MQ" , value: 0},
		{ country: "MR" , value: 0},
		{ country: "MU" , value: 0},
		{ country: "YT" , value: 0},
		{ country: "MX" , value: 0},
		{ country: "FM" , value: 0},
		{ country: "MD" , value: 0},
		{ country: "MC" , value: 0},
		{ country: "MN" , value: 0},
		{ country: "ME" , value: 0},
		{ country: "MS" , value: 0},
		{ country: "MA" , value: 0},
		{ country: "MZ" , value: 0},
		{ country: "MM" , value: 0},
		{ country: "NA" , value: 0},
		{ country: "NR" , value: 0},
		{ country: "NP" , value: 0},
		{ country: "NL" , value: 0},
		{ country: "NC" , value: 0},
		{ country: "NZ" , value: 0},
		{ country: "NI" , value: 0},
		{ country: "NE" , value: 0},
		{ country: "NG" , value: 0},
		{ country: "NU" , value: 0},
		{ country: "NF" , value: 0},
		{ country: "MP" , value: 0},
		{ country: "NO" , value: 0},
		{ country: "OM" , value: 0},
		{ country: "PK" , value: 0},
		{ country: "PW" , value: 0},
		{ country: "PS" , value: 0},
		{ country: "PA" , value: 0},
		{ country: "PG" , value: 0},
		{ country: "PY" , value: 0},
		{ country: "PE" , value: 0},
		{ country: "PH" , value: 0},
		{ country: "PN" , value: 0},
		{ country: "PL" , value: 0},
		{ country: "PT" , value: 0},
		{ country: "PR" , value: 0},
		{ country: "QA" , value: 0},
		{ country: "MK" , value: 0},
		{ country: "RO" , value: 0},
		{ country: "RU" , value: 0},
		{ country: "RW" , value: 0},
		{ country: "RE" , value: 0},
		{ country: "BL" , value: 0},
		{ country: "SH" , value: 0},
		{ country: "KN" , value: 0},
		{ country: "LC" , value: 0},
		{ country: "MF" , value: 0},
		{ country: "PM" , value: 0},
		{ country: "VC" , value: 0},
		{ country: "WS" , value: 0},
		{ country: "SM" , value: 0},
		{ country: "ST" , value: 0},
		{ country: "SA" , value: 0},
		{ country: "SN" , value: 0},
		{ country: "RS" , value: 0},
		{ country: "SC" , value: 0},
		{ country: "SL" , value: 0},
		{ country: "SG" , value: 0},
		{ country: "SX" , value: 0},
		{ country: "SK" , value: 0},
		{ country: "SI" , value: 0},
		{ country: "SB" , value: 0},
		{ country: "SO" , value: 0},
		{ country: "ZA" , value: 0},
		{ country: "GS" , value: 0},
		{ country: "SS" , value: 0},
		{ country: "ES" , value: 0},
		{ country: "LK" , value: 0},
		{ country: "SD" , value: 0},
		{ country: "SR" , value: 0},
		{ country: "SJ" , value: 0},
		{ country: "SE" , value: 0},
		{ country: "CH" , value: 0},
		{ country: "SY" , value: 0},
		{ country: "TW" , value: 0},
		{ country: "TJ" , value: 0},
		{ country: "TZ" , value: 0},
		{ country: "TH" , value: 0},
		{ country: "TL" , value: 0},
		{ country: "TG" , value: 0},
		{ country: "TK" , value: 0},
		{ country: "TO" , value: 0},
		{ country: "TT" , value: 0},
		{ country: "TN" , value: 0},
		{ country: "TR" , value: 0},
		{ country: "TM" , value: 0},
		{ country: "TC" , value: 0},
		{ country: "TV" , value: 0},
		{ country: "UG" , value: 0},
		{ country: "UA" , value: 0},
		{ country: "AE" , value: 0},
		{ country: "GB" , value: 0},
		{ country: "UM" , value: 0},
		{ country: "US" , value: 0},
		{ country: "UY" , value: 0},
		{ country: "UZ" , value: 0},
		{ country: "VU" , value: 0},
		{ country: "VE" , value: 0},
		{ country: "VN" , value: 0},
		{ country: "VG" , value: 0},
		{ country: "VI" , value: 0},
		{ country: "WF" , value: 0},
		{ country: "EH" , value: 0},
		{ country: "YE" , value: 0},
		{ country: "ZM" , value: 0},
		{ country: "ZW" , value: 0},
		{ country: "AX" , value: 0},
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
				<div className="back">
					Choose a Country to Save
				</div>
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
				tooltipBgColor="#000000"
				size="xxl"
				valueSuffix="points"
				data={data}
				styleFunction={getStyle}
				onClickFunction={handleClickOnCountry}
				tooltipTextFunction={getLocalizedText}
			/>
			<QuestionModal open={open} handleClose={handleClose} questionId={id} />
		</div>
	);
};

export default Map;
