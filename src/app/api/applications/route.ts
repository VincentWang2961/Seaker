import { NextResponse } from 'next/server';

// Example API route for job applications
// In production, this would use Prisma to query the database
export async function GET() {
  // Mock data - replace with: const applications = await prisma.jobApplication.findMany();
  const applications = [
    {
      id: '1',
      company: 'Acme Corp',
      position: 'Software Engineer',
      status: 'applied',
      appliedAt: new Date('2024-01-15').toISOString(),
      notes: null,
      url: null,
    },
  ];

  return NextResponse.json({ applications });
}

export async function POST(request: Request) {
  const body = await request.json();

  // Validate required fields
  if (!body.company || !body.position) {
    return NextResponse.json(
      { error: 'company and position are required' },
      { status: 400 }
    );
  }

  // Mock creation - replace with: const application = await prisma.jobApplication.create({ data: body });
  const application = {
    id: Date.now().toString(),
    company: body.company,
    position: body.position,
    status: body.status ?? 'applied',
    appliedAt: new Date().toISOString(),
    notes: body.notes ?? null,
    url: body.url ?? null,
  };

  return NextResponse.json({ application }, { status: 201 });
}
