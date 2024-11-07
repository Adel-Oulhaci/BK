// History.jsx
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import events from '../services/Details';

function History() {
  return (
    <VerticalTimeline>
      {events.map((event, index) => (
        <VerticalTimelineElement
          key={index}
          className={`vertical-timeline-element--${event.type}`}
          date={event.date}
          iconStyle={event.iconStyle}
          icon={event.icon}
          contentStyle={event.contentStyle}
          contentArrowStyle={event.contentArrowStyle}
        >
          {event.title && <h3 className="vertical-timeline-element-title">{event.title}</h3>}
          {event.subtitle && <h4 className="vertical-timeline-element-subtitle">{event.subtitle}</h4>}
          {event.description && <p>{event.description}</p>}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

export default History;
