import './InfoBar.css';

type InfoBarProps = {
    title: string
}

function InfoBar(props: InfoBarProps) {
    const { title } = props;

    return (
        <section className="infobar">
            {title}
        </section>
    );
}

export default InfoBar;