import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";

import { ProjectIdClinet } from "./client";

const ProjectIdPage = async () => {
  const user = await getCurrent();

  if (!user) {
    redirect("/sign-in");
  }

  return <ProjectIdClinet />;
};

export default ProjectIdPage;
