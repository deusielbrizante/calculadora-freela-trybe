import './ResultCardProject.css';

type ResultCardProps = {
    children: React.ReactNode
}

function ResultCardProject({ children }: ResultCardProps) {
    return(
        <div className="result_project">
            <div className="result_project_content">
                {children}
            </div>
        </div>
    );
}


export default ResultCardProject;