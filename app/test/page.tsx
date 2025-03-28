import { IntegrationTest } from "../components/integration-test"
import { ChartTest } from "../components/chart-test"
import { AITest } from "../components/ai-test"
import { ThemeTest } from "../components/theme-test"
import { FormTest } from "../components/form-test"
import { UITest } from "../components/ui-test"
import { ConnectionTest } from "../components/connection-test"
import { DeploymentReadiness } from "../components/deployment-readiness"

export default function TestPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Integration Test Page</h1>

      <div className="mb-8">
        <DeploymentReadiness />
      </div>

      <div className="mb-8">
        <ConnectionTest />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <IntegrationTest />
        <ChartTest />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <ThemeTest />
        <FormTest />
      </div>

      <div className="mb-8">
        <UITest />
      </div>

      <div className="max-w-3xl mx-auto">
        <AITest />
      </div>
    </div>
  )
}

