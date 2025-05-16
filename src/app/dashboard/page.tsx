"use client"

import CustomerEngagementChart  from "@/components/charts/customer-engagement-chart"
import LeadConversionChart      from "@/components/charts/lead-conversion-chart"
import LeadScoringChart         from "@/components/charts/lead-scoring-chart"
import SentimentAnalysisChart   from "@/components/charts/sentiment-analysis-chart"
import SalesPipelineChart       from "@/components/charts/sales-pipeline-chart"
import CustomerRetentionChart   from "@/components/charts/customer-retention-chart"

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

      {/* auto-fill grid: each track ≥ 280 px, grows to 1fr; rows size to content */}
      <div className="grid auto-rows-max gap-6 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
        {/* 1 */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">
              Customer&nbsp;Engagement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CustomerEngagementChart />
          </CardContent>
        </Card>

        {/* 2 */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">
              Lead&nbsp;Conversion&nbsp;Funnel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <LeadConversionChart />
          </CardContent>
        </Card>

        {/* 3 */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">
              Lead&nbsp;Scoring
            </CardTitle>
          </CardHeader>
          <CardContent>
            <LeadScoringChart />
          </CardContent>
        </Card>

        {/* 4 */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">
              Customer&nbsp;Sentiment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SentimentAnalysisChart />
          </CardContent>
        </Card>

        {/* 5 – let this one claim extra width on wide screens */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">
              Pipeline&nbsp;Value
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SalesPipelineChart />
          </CardContent>
        </Card>

        {/* 6 – full-width overview when space allows */}
        <Card className="lg:col-span-3">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-700">
              Retention&nbsp;vs&nbsp;Churn
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CustomerRetentionChart />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
