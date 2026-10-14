import {
  Building2,
  FileStack,
  FileText,
  GraduationCap,
  LayoutGrid,
  ListChecks,
  Lock,
  MessageSquareQuote,
  Route,
  Scale,
  ShieldAlert,
  UserRoundX,
  type LucideIcon,
} from "lucide-react";
import type { FeatureIcon } from "@/content/features";
import type { FactIcon } from "@/content/home";

export const featureIcons: Record<FeatureIcon, LucideIcon> = {
  questions: ListChecks,
  answers: MessageSquareQuote,
  risk: ShieldAlert,
  documents: FileText,
  honest: Scale,
  private: Lock,
};

export const factIcons: Record<FactIcon, LucideIcon> = {
  categories: LayoutGrid,
  questions: ListChecks,
  answers: MessageSquareQuote,
  formats: FileStack,
  signup: UserRoundX,
};

export const useCaseIcons: Record<string, LucideIcon> = {
  student: GraduationCap,
  consultancy: Building2,
  tricky: Route,
};
