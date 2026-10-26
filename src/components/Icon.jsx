import {
  ChartNoAxesCombined, CircleHelp, Clock3, CodeXml, Cog, Gauge, Gem, Goal, Images, LayoutTemplate, Mail,
  MapPin, MessageCircle, MessagesSquare, Monitor, MonitorCheck, PencilRuler, RefreshCcw, Rocket, Send,
  Share2, Sparkles,
} from 'lucide-react'

/* Registro de iconos usados en los datos (src/data). Agrega aquí uno nuevo antes de usarlo. */
const icons = {
  ChartNoAxesCombined, CircleHelp, Clock3, CodeXml, Cog, Gauge, Gem, Goal, Images, LayoutTemplate, Mail,
  MapPin, MessageCircle, MessagesSquare, Monitor, MonitorCheck, PencilRuler, RefreshCcw, Rocket, Send,
  Share2, Sparkles,
}

export default function Icon({ name, ...props }) {
  const Component = icons[name]
  return Component ? <Component aria-hidden="true" {...props} /> : null
}
