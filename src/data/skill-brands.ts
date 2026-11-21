import {
  siAngular,
  siApachekafka,
  siDatadog,
  siDocker,
  siGit,
  siGitlab,
  siIntellijidea,
  siJira,
  siKotlin,
  siKubernetes,
  siMysql,
  siNextdotjs,
  siOpenjdk,
  siPostgresql,
  siPython,
  siReact,
  siSpringboot,
  siTerraform,
  type SimpleIcon,
} from 'simple-icons';

// Brand logos keyed by skill id (see skillsData in cv.ts).
// Skills without a logo here fall back to the generic icon in cv.ts.
// Java uses the OpenJDK mark, since the Java logo itself is not in simple-icons.
export const skillBrandIcons: Record<string, SimpleIcon> = {
  sk1: siOpenjdk, // Java
  sk2: siKotlin,
  sk3: siPython,
  sk5: siMysql,
  sk6: siPostgresql,
  sk7: siSpringboot,
  sk8: siAngular,
  sk10: siTerraform,
  sk11: siKubernetes,
  sk12: siDocker,
  sk13: siApachekafka,
  sk14: siGit,
  sk15: siGitlab,
  sk16: siDatadog,
  sk17: siJira,
  sk18: siIntellijidea,
  sk20: siNextdotjs,
  sk21: siReact,
};
