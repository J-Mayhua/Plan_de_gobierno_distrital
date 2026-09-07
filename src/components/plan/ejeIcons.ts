import {
  Sprout,
  Route as RouteIcon,
  Droplets,
  GraduationCap,
  ShieldCheck,
  Landmark,
  type LucideIcon,
} from 'lucide-react';

export const EJE_ICONS: Record<string, LucideIcon> = {
  wheat: Sprout,
  route: RouteIcon,
  droplets: Droplets,
  'graduation-cap': GraduationCap,
  'shield-check': ShieldCheck,
  landmark: Landmark,
};

export function getEjeIcon(icono: string): LucideIcon {
  return EJE_ICONS[icono] ?? Landmark;
}
