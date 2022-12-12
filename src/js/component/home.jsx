import React, { useEffect, useState } from "react";

//create your first component
const Home = () => {
	const [time, startcounter] = useState(0);
	const [start, setStart] = useState(true);




      start == false ? time=time : (
				useEffect(() => {
					const interval = setInterval(() => {
						startcounter(time+1);
					}, 1000);
					return () => clearInterval(interval);
				})
				)



	return (		
<div className="text-center">
	<h1>The Count is {time}</h1>
	<button onClick={() =>setStart(false)}>Stop</button>
	<button onClick={() =>setStart(true)}>Resume</button>
	<button>Reset</button>
</div>

		
	);
};

export default Home;

