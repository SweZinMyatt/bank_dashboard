
import Layout from "#/components/templates/main_layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/_authenticated')({
  component: Layout,
})