import {
	AcademicCapIcon,
	AdjustmentsHorizontalIcon,
	AdjustmentsVerticalIcon,
	ArchiveBoxArrowDownIcon,
	ArchiveBoxIcon,
	ArchiveBoxXMarkIcon,
	ArrowDownCircleIcon
} from '@heroicons/react/24/outline'

interface IconProps {
	name: string;
}

export const Icon = ({ name }: IconProps): JSX.Element => {
	switch (name) {
		case 'academic-cap':
			return <AcademicCapIcon />;
		case 'adjustments-horizontal':
			return <AdjustmentsHorizontalIcon />;
		case 'adjustments-vertical':
			return <AdjustmentsVerticalIcon />;
		case 'archive-box-arrow-down':
			return <ArchiveBoxArrowDownIcon />;
		case 'archive-box':
			return <ArchiveBoxIcon />;
		case 'archive-box-x-mark':
			return <ArchiveBoxXMarkIcon />;
		case 'arrow-down-circle':
			return <ArrowDownCircleIcon />;
	}
}
