const assetUrl = (fileName) => new URL(`../../assets/stack/${fileName}`, import.meta.url).href;

const STACK_ICONS = {
  java: assetUrl('java.svg'),
  ts: assetUrl('ts.svg'),
  js: assetUrl('js.svg'),
  springboot: assetUrl('springboot.png'),
  kafka: assetUrl('kafka.svg'),
  camunda: assetUrl('camunda.png'),
  struts: assetUrl('struts.svg'),
  angular: assetUrl('angular.png'),
  saas: assetUrl('saas.svg'),
  boostrap: assetUrl('boostrap.svg'),
  postgresql: assetUrl('postgresql.svg'),
  oracledb: assetUrl('oracledb.svg'),
  docker: assetUrl('docker.svg'),
  gitlab: assetUrl('gitlab.svg'),
  jenkins: assetUrl('jenkins.svg'),
  flyway: assetUrl('flyway.svg'),
  kibana: assetUrl('kibana.svg'),
  ocp: assetUrl('ocp.svg'),
  jboss: assetUrl('jboss.svg'),
  postman: assetUrl('postman.svg'),
  jira: assetUrl('jira.svg'),
  python: assetUrl('python.svg'),
  c: assetUrl('c.svg'),
  cpp: assetUrl('cpp.svg'),
  react: assetUrl('react.svg'),
  thymeleaf: assetUrl('thymeleaf.svg'),
  mongodb: assetUrl('mongodb.svg'),
  firebase: assetUrl('firebase.svg'),
  githubactions: assetUrl('githubactions.svg'),
  gcp: assetUrl('gcp.svg'),
  androidstudio: assetUrl('androidstudio.svg'),
  jupyter: assetUrl('jupyter.svg'),
  googlecolab: assetUrl('googlecolab.svg'),
  vibecode: assetUrl('vibecode.png'),
};

export const STACK_GROUPS = {
  core: {
    title: "Current Stack & Expertise",
    subcategories: {
      "Languages": {
        png: [
          STACK_ICONS.java,
          STACK_ICONS.ts,
          STACK_ICONS.js,
        ],
        labels: ["Java", "TypeScript", "JavaScript"],
      },
      "Backend": {
        png: [
          STACK_ICONS.springboot,
          STACK_ICONS.kafka,
          STACK_ICONS.camunda,
          STACK_ICONS.struts,
        ],
        labels: ["Spring Boot", "Kafka", "Camunda", "Struts"],
      },
      "Frontend": {
        png: [
          STACK_ICONS.angular,
          STACK_ICONS.saas,
          STACK_ICONS.boostrap,
        ],
        labels: ["Angular", "Saas", "Bootstrap"],
      },
      "Database": {
        png: [STACK_ICONS.postgresql, STACK_ICONS.oracledb],
        labels: ["PostgreSQL", "Oracle DB"],
      },
      "DevOps": {
        png: [
          STACK_ICONS.docker,
          STACK_ICONS.gitlab,
          STACK_ICONS.jenkins,
          STACK_ICONS.flyway,
          STACK_ICONS.kibana,
        ],
        labels: ["Docker", "GitLab", "Jenkins", "Flyway", "Kibana"],
      },
      "Cloud": {
        png: [STACK_ICONS.ocp],
        labels: ["OpenShift Cloud Platform"],
      },
      "Application Server": {
        png: [STACK_ICONS.jboss],
        labels: ["JBoss"],
      },
      "Other": {
        png: [STACK_ICONS.postman, STACK_ICONS.jira],
        labels: ["Postman", "Jira"],
      },
    },
  },
  experienced: {
    title: "Experienced With",
    subcategories: {
      "Languages": {
        png: [
          STACK_ICONS.python,
          STACK_ICONS.c,
          STACK_ICONS.cpp,
        ],
        labels: ["Python", "C", "C++"],
      },
      "Frontend": {
        png: [STACK_ICONS.react, STACK_ICONS.thymeleaf],
        labels: ["React", "Thymeleaf"],
      },
      "Database": {
        png: [STACK_ICONS.mongodb, STACK_ICONS.firebase],
        labels: ["MongoDB", "Firebase Realtime Database"],
      },
      "DevOps": {
        png: [STACK_ICONS.githubactions],
        labels: ["Github Actions"],
      },
      "Cloud": {
        png: [STACK_ICONS.gcp],
        labels: ["Google Cloud Platform"],
      },
      "Mobile App Development": {
        png: [STACK_ICONS.androidstudio],
        labels: ["Android Studio"],
      },
      "AI & Data Tools": {
        png: [STACK_ICONS.jupyter, STACK_ICONS.googlecolab],
        labels: ["Jupyter Notebook", "Google Colab"],
      },
    },
  },
  learn: {
    title: "Currently Exploring",
    subcategories: {
      "AI & Data Tools": {
        png: [STACK_ICONS.vibecode],
        labels: ["Vibe Code"],
      },
    },
  },
};
