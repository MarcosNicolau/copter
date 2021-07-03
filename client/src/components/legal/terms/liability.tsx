import React from "react";
import { Clause, List, Point, Text } from "../content";

const Liability = () => {
	return (
		<Point title="15. Liability and Indemnity">
			<Clause>15.1 Exclusion of liability</Clause>
			<Text>
				To the extent permitted by law, Copter and its related companies exclude all
				liability and responsibility for any loss, damages, costs or expense, whether in
				tort (including negligence), contract or otherwise and whether direct, indirect, or
				consequential (including in connection with business interruption), which you or any
				other person may suffer or incur in connection with the Services the use or
				inability to use the Site, and in respect of any Digital Currency or otherwise.
			</Text>
			<List
				text="Where and to the extent liability for breach or any implied warranty or condition, 
                or otherwise, cannot be excluded, ​Copter’s liability to you is limited (at your​option) to:"
			>
				<li>
					the total amount of the fees we have earned from you as a result of supplying
					the Services to you; or
				</li>
				<li>the supply of the Services to you again.</li>
			</List>
			<Text>
				Copter is not liable in any way whatsoever to you or anyone else for any financial
				decision or action taken by you or anyone else using the Services.
			</Text>
			<Text>
				Important: In providing the Services,​ Copter is required to provide certain
				guarantees that cannot be excluded under consumer law, if you are using the Services
				for personal use, including guarantees as to the acceptable quality and fitness of
				purpose of the Services. Nothing in these Terms will be read or applied so as to
				exclude, restrict or modify or have the effect of excluding, restricting or
				modifying any condition, warranty, guarantee, right or remedy implied by the law and
				which by law cannot be excluded, restricted or modified, even if any other provision
				of these Terms and Conditions would otherwise suggest that this might be the case.
			</Text>
			<Clause>15.2 No warranty</Clause>
			<Text>
				To the extent permitted by law we do not warrant the reliability, availability,
				accuracy, completeness or timeliness of information on the Site. All information is
				provided “as is” without warranty of any kind, express or implied. This includes
				(but is not limited to) implied warranties of merchantability, fitness for a
				particular purpose, title or non-infringement.
			</Text>
			<Clause>15.3 ​Copter’s liability is limited</Clause>
			<List
				text="Without limiting the other terms in these Terms and Conditions, you acknowledge that HMC Ventures Ltd bears 
            no liability for any damage, loss (including loss of profit), delay or inconvenience, or failure in performance or interruption 
            of Service or Transaction, in each case caused by or resulting from (directly or indirectly):"
			>
				<li>
					any computer virus, spyware, scareware, Trojan horse, worms or other malware or
					cyber, phishing or spoofing attack that may affect your computer or other
					device, or the data held by ​Copter (including in respect of​ your
					​Copter&apos;s Wallet);
				</li>
				<li>
					any cause or condition beyond our reasonable control, including but not limited
					to, any delay or failure due to any act of God, act of civil or military
					authority, act of terrorism, civil disturbances, war, strike or other labour
					dispute, fire, interruption in telecommunications or internet services or
					network provider services, failure of equipment or software, cyber-attack, or
					other occurrence or catastrophe;
				</li>
				<li>
					any “hard fork”, “soft fork”, or other change in the operating rules of an
					underlying Digital Currency network;
				</li>
				<li>
					our good faith election not to support an unsupported branch of a forked
					protocol, or to configure or reconfigure our systems as a result of the forked
					protocol or other change to the operating rules;
				</li>
				<li>
					any suspension of Services following a Suspension Event or as otherwise
					permitted under these Terms and Conditions;
				</li>
				<li>inaccurate Orders being placed; and/or</li>
				<li>you not meeting your legal obligations, including your tax obligations</li>
			</List>
			<Clause>15.4 Indemnity</Clause>
			<List
				text="Each User and Approved User indemnifies Copter and holds Copter harmless for any loss, cost, liability or expense sustained or incurred
                 by it as a result of the relevant User or Approved User breaching these Terms and Conditions, including by:"
			>
				<li>engaging in any Prohibited Use;</li>
				<li>
					any other breach by you of the Terms and Conditions or of the Privacy Policy;
					and/or
				</li>
				<li>any reliance by you on any information obtained through the Site.</li>
			</List>
		</Point>
	);
};

export default Liability;
