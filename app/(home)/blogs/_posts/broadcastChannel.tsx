import {
  BackBtn,
  BlogContainer,
  Heading,
  Paragraphs,
  BlogContainerMainContent,
} from '@/app/_components/BlogContainer';
import { Code } from '@/app/_components/code';
import { blogId, blogs } from '@/app/_lib/constants';

export default function BroadcastChannel() {
  return (
    <BlogContainer>
      <BackBtn />
      <Heading>{blogs[blogId.broadcastChannel].title}</Heading>
      <BlogContainerMainContent>
        <Paragraphs>
          The BroadcastChannel API allows multiple tabs or windows of the same
          browser to communicate with each other.
        </Paragraphs>

        <Paragraphs>
          Now, you might be wondering where this could be useful. Imagine a user
          is logged into your application in two different tabs, Tab A and Tab
          B. If the user logs out from Tab A, Tab B might still show them as
          logged in because it hasn&apos;t received any information about the
          logout event.
        </Paragraphs>

        <Paragraphs>
          This is where the BroadcastChannel API comes in handy. You can simply{' '}
          <span className="mark">broadcast a message</span>, and other tabs
          listening to the same channel will{' '}
          <span className="mark">receive that message</span> and perform the
          required action, such as logging the user out automatically. :)
        </Paragraphs>

        <Paragraphs>
          Now, let&apos;s implement this with a practical example. First, create
          a React application and open the same application in two separate
          browser tabs.
        </Paragraphs>

        <Code
          code={`const broadcastChannel = new BroadcastChannel('bcc-practical');

broadcastChannel.postMessage({
  logout: true,
});

return () => {
  broadcastChannel.close();
};`}
        />

        <Paragraphs>
          As you can see in the code above, we create a new BroadcastChannel
          instance and pass &quot;bcc-practical&quot; as its name. Think of this
          name as an identifier for the communication channel. Any other tab
          that wants to receive messages from this channel must create a
          BroadcastChannel using the same name.
        </Paragraphs>

        <Paragraphs>
          Next, let&apos;s see how another tab can listen for messages sent
          through this channel.
        </Paragraphs>

        <Code
          code={`broadcastChannel.onmessage = (event) => {
  console.log(event.data); // { logout: true }
};`}
        />

        <Paragraphs>
          In the code above, we listen for incoming messages using the{' '}
          <span className="mark">onmessage</span> event handler. Whenever
          another tab sends a message using
          <span className="mark"> postMessage()</span>, this callback is
          triggered. The message payload is available through{' '}
          <span className="mark">event.data</span>, which contains the data sent
          by the other tab.
        </Paragraphs>

        <Paragraphs>
          <span className="mark">One important thing to remember:</span> make
          sure your message-handling logic doesn&apos;t create an infinite
          communication loop. Also, don&apos;t forget to{' '}
          <span className="mark">
            clean up the BroadcastChannel listener and close the channel
          </span>{' '}
          when the component unmounts to avoid unnecessary resource usage.
        </Paragraphs>
      </BlogContainerMainContent>
    </BlogContainer>
  );
}
