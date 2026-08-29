import '../styles/components/feature-item.css'

function FeatureItem({ icon: Icon, title, description }) {
    return (
        <div className="feature-item">

            <div className="feature-item-icon">
                <Icon />
            </div>

            <strong>{title}</strong>

            <span>{description}</span>

        </div>
    )
}

export default FeatureItem