import React from "react";
import { Point, List, Text, Clause } from "../content";

const Rights = () => {
	return (
		<Point title="12. Our Rights and Remedies">
			<Clause>12.1 Additional rights</Clause>
			<List
				text="In addition to exercising our rights under clause 10 (Suspension) and/or clause 11 (No Prohibited Use), in the event we believe 
            you have breached or are breaching any of these Terms and Conditions or any applicable law, we may do any of the following:"
			>
				<li>limit your access to or activities on the Site;</li>
				<li>warn any Users or Approved Users of your actions;</li>
				<li>issue a warning to you;</li>
				<li>suspend or cancel your access to the Sites;</li>
				<li>
					advise any regulators and co-operate fully with any law enforcement authorities
					which may include disclosing information we hold about you about you.
				</li>
			</List>
			<Clause>12.2 Additional rights</Clause>
			<Text>This clause 12 does not limit any of our other rights and remedies at law.</Text>
		</Point>
	);
};

export default Rights;
