const Biodata = (props) => {
    return (
        <div className="container">
            <h1>BioData</h1><br/>
            <h2>{props.name}</h2>
            <p>Email: {props.email}</p>
            <p>Phone: {props.phone}</p>
            <p>Address: {props.address}</p>

            <div className="skils">
                <h2>Skills :</h2>
                <ul>
                    {props.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </div>

            <div className="social">
                <h2>Social Media :</h2>
                <ul>
                    {props?.socialLinks?.map((social) => (
                        <li key={social.platformName}>
                            <strong>{social.platformName} :</strong>{" "}
                            <a href={social.url} target="_blank" rel="noreferrer">
                                {social.url}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Biodata;