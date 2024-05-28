export async function GET(request: Request) {
    return new Response(JSON.stringify({"message": "hello"}), {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
    });
}