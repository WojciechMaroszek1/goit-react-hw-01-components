import PropTypes from 'prop-types';
import css from '../Profile/Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => (
	<div className={css.box}>
		<div className={css.profile}>
			<div className={css.description}>
				<img src={avatar} alt="User avatar" className={css.avatar} />
				<p className={css.name}>{username}</p>
				<p className={css.tag}>{tag}</p>
				<p className={css.location}>{location}</p>
			</div>

			<ul className={css.stats}>
				<li className={css.stats_box}>
					<span className={css.label}>Follower</span>
					<span className={css.quantity}>{stats.followers}</span>
				</li>
				<li className={css.stats_box}>
					<span className={css.label}>Views</span>
					<span className={css.quantity}>{stats.views}</span>
				</li>
				<li className={css.stats_box}>
					<span className={css.label}>Likes</span>
					<span className={css.quantity}>{stats.likes}</span>
				</li>
			</ul>
		</div>
	</div>
);

Profile.propTypes = {
	username: PropTypes.string.isRequired,
	tag: PropTypes.string,
	location: PropTypes.string,
	avatar: PropTypes.string.isRequired,
	stats: PropTypes.shape({
		followers: PropTypes.number.isRequired,
		likes: PropTypes.number.isRequired,
		views: PropTypes.number.isRequired,
	}),
};
