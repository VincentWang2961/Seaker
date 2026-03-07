import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const mockApplications = [
  {
    id: '1',
    company: 'Acme Corp',
    position: 'Software Engineer',
    status: 'applied',
    appliedAt: '2024-01-15',
  },
  {
    id: '2',
    company: 'Tech Startup',
    position: 'Full Stack Developer',
    status: 'interview',
    appliedAt: '2024-01-20',
  },
  {
    id: '3',
    company: 'Big Tech Co',
    position: 'Senior Engineer',
    status: 'offer',
    appliedAt: '2024-01-25',
  },
];

const statusColors: Record<string, 'default' | 'secondary' | 'destructive' | 'outline'> = {
  applied: 'secondary',
  interview: 'default',
  offer: 'outline',
  rejected: 'destructive',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Seaker</h1>
            <p className="mt-2 text-muted-foreground">
              Your job application tracker and analytics dashboard
            </p>
          </div>
          <Button>Add Application</Button>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Applications</CardDescription>
              <CardTitle className="text-3xl">3</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>In Progress</CardDescription>
              <CardTitle className="text-3xl">1</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Interviews</CardDescription>
              <CardTitle className="text-3xl">1</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Offers</CardDescription>
              <CardTitle className="text-3xl">1</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Applications</CardTitle>
            <CardDescription>
              Track and manage your job applications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockApplications.map((app) => (
                <div
                  key={app.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div>
                    <p className="font-medium">{app.position}</p>
                    <p className="text-sm text-muted-foreground">
                      {app.company}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Applied: {app.appliedAt}
                    </p>
                  </div>
                  <Badge variant={statusColors[app.status] ?? 'secondary'}>
                    {app.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 rounded-lg border border-dashed p-8 text-center">
          <p className="text-muted-foreground">
            Stack: Next.js · TypeScript · Tailwind CSS · shadcn/ui · Prisma ·
            PostgreSQL
          </p>
        </div>
      </div>
    </main>
  );
}
