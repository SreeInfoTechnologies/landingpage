import {
  Users,
  RefreshCw,
  Megaphone,
  Target,
  TrendingUp,
  Lightbulb,
  Handshake,
  Briefcase,
  Code2,
  Cloud,
  MonitorCog,
  LineChart,
  MapPin,
  Phone,
  Mail,
  Globe,
  CheckCircle2,
} from "lucide-react";

/** Map data-layer icon strings to lucide-react components. */
const icons = {
  Users,
  RefreshCw,
  Megaphone,
  Target,
  TrendingUp,
  Lightbulb,
  Handshake,
  Briefcase,
  Code2,
  Cloud,
  MonitorCog,
  LineChart,
  MapPin,
  Phone,
  Mail,
  Globe,
  CheckCircle2,
};

/** Resolve an icon by name, defaulting to a check mark. */
export function getIcon(name) {
  return icons[name] || CheckCircle2;
}
