-- CreateTable
CREATE TABLE "Alert" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "impactedEntities" TEXT NOT NULL,
    "totalIncidents" INTEGER NOT NULL,
    "state" TEXT NOT NULL,
    "trigger" TEXT NOT NULL,
    "isCorrelated" BOOLEAN NOT NULL,
    "issueUrl" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "updatedAt" TEXT NOT NULL,
    "sources" TEXT NOT NULL,
    "alertPolicyNames" TEXT NOT NULL,
    "alertConditionNames" TEXT NOT NULL,
    "workflowName" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Alert_id_key" ON "Alert"("id");
