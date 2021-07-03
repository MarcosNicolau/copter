import React from "react";
import { Point, List, Clause } from "../content";

const Suspension = () => {
	return (
		<Point title="10. Suspension">
			<Clause>10.1 Suspension Events</Clause>
			<List
				text="Copter may suspend the Services in any of the following cases without prior notice for 
                any period it determines in its discretion (each a Suspension Event) if it considers it necessary or desirable to do so:"
			>
				<li>as a result of any Prohibited Use;</li>
				<li>
					following a “hard fork” or other sudden change in operating rules in any
					underlying digital asset network
				</li>
				<li>following a force majeure event or a market disruption event</li>
				<li>
					to comply with law, whether or not following a change in applicable law or
					regulator guidance
				</li>
			</List>
			<Clause>10.2 Consequences of a Suspension Event</Clause>
			<List>
				<li>
					If a Suspension Event occurs, Copter can suspend one or more Services to one or
					more (or all) Approved Users for so long as Copter determines, in good faith, as
					is required or prudent in view of the interests of Copter and its Approved Users
					(or affected Approved Users).
				</li>
				<li>
					Copter will not be liable to any Approved User or other person for any loss
					(including any loss of profit), liability or inconvenience arising as a result
					of any Suspension Event, or the suspension of any Services or access to the Site
					arising from action taken following a Suspension Event.
				</li>
				<li>
					If Copter considers that it is practicable and prudent for it to do so in the
					circumstances of the Suspension Event, and in view of the interests of Copter
					and its Approved Users (or the affected Approved​ Users), it will give you the
					opportunity to withdraw your Digital Currencies from your Digital Currency
					Wallet and transfer them to another service (that is, a service which is not
					provided by ​Copter.
				</li>
			</List>
		</Point>
	);
};

export default Suspension;
