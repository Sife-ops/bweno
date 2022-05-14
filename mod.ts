export function hello(): string {
  console.log('hello');
  return 'hello';
}

export class Bweno {
  constructor(
    // todo: change to object
    private url: string = 'http://localhost:8087'
  ) {}

  private async bwApiRequest(e: string, i: RequestInit) {
    const response = await fetch(`${this.url}${e}`, i);

    if (!response.ok) {
      // todo: better error
      throw new Error('not ok');
    }

    return await response.json();
  }

  private async bwApiGetRequest(e: string) {
    return await this.bwApiRequest(e, { method: 'GET' });
  }

  private async bwApiPostRequest(e: string) {
    return await this.bwApiRequest(e, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  private async bwApiPutRequest(e: string) {
    return await this.bwApiRequest(e, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  private async bwApiDeleteRequest(e: string) {
    return await this.bwApiRequest(e, { method: 'DELETE' });
  }
}
